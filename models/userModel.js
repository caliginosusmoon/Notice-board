const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userId: String,
  passWord: String,
  emailId: String,
  phoneNumber: String,
  department: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
