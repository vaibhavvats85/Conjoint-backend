const mongoose = require("mongoose");
const User = require('../models/Users');
const jwt = require("jwt-then");

// const User = mongoose.model("User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

  if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
  if (password.length < 6) throw "Password must be atleast 6 characters long.";

  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw "User with same email already exits.";

  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  res.json({
    message: "User [" + name + "] registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) throw "Email and Password did not match.";

  const token = await jwt.sign({ username: user.name, id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully!",
    token
  });
};