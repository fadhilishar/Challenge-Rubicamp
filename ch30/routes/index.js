var express = require("express");
var router = express.Router();
// const { json } = require("express/lib/response");
var Response = require("../models/Response");
var jwt = require("jsonwebtoken");
// var token = jwt.sign({ foo: "bar" }, "Halo");

/* GET home page. */

router.get("/", function (req, res, next) {
  // const data = {
  //   nama: "Fadhil",
  // };
  var token = jwt.sign({ username: "Fadhil" }, "shhhhh");
  res.json(
    new Response({
      nama: "Dandi",
      // page: Number(page),
      // url,
      // pages,
      token,
    })
  );
});

module.exports = router;
