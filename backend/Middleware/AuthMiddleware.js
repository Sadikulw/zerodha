const { User } = require("../model/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ status: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({ status: false });
    }

    return res.json({
      status: true,
      user: user.name,
      email: user.email
    });

  } catch (error) {
    return res.json({ status: false });
  }
};