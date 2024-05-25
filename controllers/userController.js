const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userId,
      passWord,
      emailId,
      phoneNumber,
      department,
      isAdmin,
    } = req.body;
    console.log(req.body);

    let existingUser;
    try {
      existingUser = await User.findOne({ userId });
    } catch (error) {
      return console.log(error);
    }

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists!",
      });
    }

    const hashPassword = bcrypt.hashSync(passWord);

    const newUser = new User({
      firstName,
      lastName,
      userId,
      passWord: hashPassword,
      emailId,
      phoneNumber,
      department,
      isAdmin,
    });

    console.log("saving", req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { userId, passWord } = req.body;
  console.log(req.body);
  let existingUser;
  try {
    existingUser = await User.findOne({ userId });
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const validatePassword = bcrypt.compareSync(passWord, existingUser.passWord);

  if (!validatePassword) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }
  return res
    .status(200)
    .json({ message: "Login Successful", user: existingUser });
};
