const User = require("../models/User");
const key = require("../configs/key.json");

module.exports = {
  isLoggedIn: async function (req, res, next) {
    let token = req.header("Authorization");
    token = token.split(" ")[1];
    console.log(`token=${token}`);

    const { userid } = jwt.decode(token, secret);
    try {
      const user = await User.findOne({ _id: userid });
      if (user.token) {
        return next();
      }
      res.json({});
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
