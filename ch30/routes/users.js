var express = require("express");
var router = express.Router();
var Response = require("../models/Response");
const User = require("../models/User");
var jwt = require("jsonwebtoken");
var { ObjectId } = require("mongodb");

//Middleware
const helpers = require("../helpers/util");

const key = require("../configs/key.json");
var secret = key.privateKey;

const bcrypt = require("bcrypt");
// const { db } = require("../models/User");
const saltRounds = 10;
/* GET users listing. */

router.get("/", async function (req, res, next) {
  console.log(`enter router.get/ in users.js`);
  try {
    // let token = req.header("Authorization");
    // console.log(`token= ${token}`);
    // token = token.split(" ")[1];
    // console.log(`token= ${token}`);
    // console.log(`secret = ${secret}`);

    // console.log(jwt.verify(token, key.privateKey));
    // const { userid } = jwt.decode(token, secret, { algorithms: ["HS256"] });
    // console.log(`key =${JSON.stringify(key)}`);
    // console.log(`userid = ${userid}`);

    // const user_db = await User.findOne({ _id: userid });
    // console.log(`user_db =${user_db}`);
    // user_db.token = null;

    // await user_db.save();
    res.json({ message: "enter router get/ in users.js" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/register", async function (req, res, next) {
  console.log("enter router.post/register in users.js");
  try {
    const { email, password, retypepassword } = req.body;

    if (password === retypepassword) {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        console.log(`enter bcrypt.hash`);
        const user = await User.create({ email, password: hash });
        // console.log(`user= ${user}`);
        // let userid = user._id;
        // console.log(`userid=${user._id}`);
        // console.log(`ObjectId = ${userid}`);
        let token = jwt.sign({ userid: user._id }, secret);
        // console.log(`hash= ${hash}`);
        // let data = { email };

        user.token = token;

        //Save to Database
        await user.save();
        console.log(`save to Database success`);

        res.json(new Response({ email }, token));

        // res.json({ data: { email }, token });
      });
    } else {
      res.json({ message: "password does not Match" });
    }
  } catch (error) {
    console.log("error entering router.post/register in users.js");
    res.status(500).json({ error });
  }
});

router.post("/login", async function (req, res, next) {
  console.log("enter router.post/login in users.js");
  try {
    const { email, password } = req.body;
    // console.log(`email =${email}`);
    // console.log(`password =${password}`);

    let user_db = await User.findOne({ email });
    if (user_db) {
      //Jika data ada di database
      let password_db = user_db.password;
      let userid_db = user_db._id;

      // console.log(`user_db = ${user_db}`);
      console.log(`password_db = ${password_db}`);
      // console.log(`userid_db = ${userid_db}`);

      bcrypt.compare(password, password_db, async function (err, result) {
        console.log(`enter bcrypt.compare`);
        console.log(`password`, password);
        // console.log(`result = ${result}`);

        if (result) {
          let token = jwt.sign({ userid: userid_db }, secret);
          // console.log(`token= ${token}`, typeof token);
          // let data = { email };
          // console.log(`email=${email}`);
          // console.log(`user_db.token = ${user_db.token}`);
          user_db.token = token;

          // console.log(`user_db = ${user_db}`);
          // console.log(`user_db.token = ${user_db.token}`);

          //Save to Database
          await user_db.save(function (err) {
            if (err) {
              console.log(`error save to database nya = ${err} `);
              return;
            }

            res.json({ data: { email }, token });
          });
          console.log(`save to database success`);
        } else {
          res.json({ message: `wrong password` });
        }
      });
    } else {
      // Jika data tidak ada di database
      res.json({ message: `user with email ${email} not found` });
    }
  } catch (error) {
    console.log("error entering router.post/login in users.js");
    res.status(500).json({ error });
  }
});

router.post("/check", async function (req, res, next) {
  try {
    console.log(`enter router.post/check in users.js`);

    //Retrieve token from header
    let token = req.header("Authorization");
    token = token.split(" ")[1];
    // console.log(`token=${token}`);
    // console.log(`key =${JSON.stringify(key)}`);
    const { userid } = jwt.decode(token, secret);
    // console.log(`userid= ${userid}`);
    const user_db = await User.findOne({ _id: userid });

    // console.log(`user_db= ${user_db}`);
    if (Boolean(user_db.token) !== false) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.log(`error entering router.post/check in users.js`);
    res.status(500).json({ error });
  }
});

router.get("/logout", async function (req, res, next) {
  console.log(`enter router.get/logout in users.js`);
  try {
    let token = req.header("Authorization");
    // console.log(`token= ${token}`);
    token = token.split(" ")[1];
    // console.log(`token= ${token}`);
    // console.log(`secret = ${secret}`);

    // console.log(jwt.verify(token, key.privateKey));
    const { userid } = jwt.decode(token, secret, { algorithms: ["HS256"] });
    // console.log(`key =${JSON.stringify(key)}`);
    // console.log(`userid = ${userid}`);

    const user_db = await User.findOne({ _id: userid });
    // console.log(`user_db =${user_db}`);
    user_db.token = null;

    //Save to Database
    await user_db.save();
    console.log(`save to database has been succeed`);

    res.json({ logout: true });
  } catch (error) {
    console.log(`error entering router.get/logout in users.js`);
    res.status(500).json({ error });
  }
});

module.exports = router;
