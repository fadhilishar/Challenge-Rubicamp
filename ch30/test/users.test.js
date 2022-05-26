const chai = require("chai");
const chaiHTTP = require("chai-http");
const { user } = require("pg/lib/defaults");

const server = require("../app");

const User = require("../models/User");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const should = chai.should();
// boleh juga cuma chai.should() aja

const key = require("../configs/key.json");
var jwt = require("jsonwebtoken");
var secret = key.privateKey;

chai.use(chaiHTTP);

describe("user", function () {
  beforeEach(function (done) {
    User.create({
      email: "Rama@email.com",
      password: "123",
    }).then((user) => {
      bcrypt.hash(user.password, saltRounds, function (err, hash) {
        user.password = hash;

        let token = jwt.sign({ userid: user._id }, secret);
        user.token = token;

        console.log("user", user);
        //Save to Database
        user.save().then(() => {
          console.log(`save to Database success`);
          done();
        });
      });
    });
  });

  afterEach(function (done) {
    //ini bisa deleteOne bisa remove
    User.deleteOne({ email: "Rama@email.com" }).then(() => {
      done();
    });
    // done();
  });

  // MULAI DARI SINI

  it("seharusnya mengirimkan data user : email dan token dengan metode POST", function (done) {
    chai
      .request(server)
      .post("/api/users/register")
      .send({
        email: "ramadhan12@mail.com",
        password: "1234",
        retypepassword: "1234",
      })
      .end(function (err, res) {
        console.log(`res`, res);
        console.log(`res.body =${JSON.stringify(res.body)}`);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        res.body.data.should.have.property("email");
        res.body.should.have.property("token");

        // res.body.token.should.equal(user.token);
        done();
      });
  });

  it("seharusnya mengirimkan data user : email dan token dengan metode POST", function (done) {
    User.findOne({ email: "Rama@email.com" }).then((user) => {
      chai
        .request(server)
        .post("/api/users/login")
        .send({ email: user.email, password: "123" })
        .end(function (err, res) {
          console.log(`res =${res}`);
          console.log(`res.body =${JSON.stringify(res.body)}`);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.have.property("data");

          done();
        });
    });
  });

  it("seharusnya mengecek token valid atau tidak dengan metode POST", function (done) {
    User.findOne({ email: "Rama@email.com" }).then((user) => {
      chai
        .request(server)
        .post("/api/users/check")
        .set("Authorization", `Bearer ${user.token}`)
        .end(function (err, res) {
          console.log(`res =${res}`);
          console.log(`res.body =${JSON.stringify(res.body)}`);

          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");

          done();
        });
    });
  });

  it("seharusnya mengirimkan logout berhasil atau tidak dengan metode GET", function (done) {
    User.findOne({ email: "Rama@email.com" }).then((user) => {
      chai
        .request(server)
        .get("/api/users/logout")
        .set("Authorization", `Bearer ${user.token}`)
        .end(function (err, res) {
          console.log(`res =${res}`);
          console.log(`res.body =${JSON.stringify(res.body)}`);
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");

          done();
        });
    });
  });
});
