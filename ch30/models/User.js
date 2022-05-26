const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  token: String,
});

module.exports = model("User", userSchema);
