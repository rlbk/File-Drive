const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minLength: [3, "Username must be atleast 3 characters long."],
  },
  email: {
    type: String,
    requrired: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    requrired: true,
    trim: true,
    minLength: [6, "Password must be atleast 6 characters long."],
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
