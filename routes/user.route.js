const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.get("/register", (req, res) => {
  res.render("register");
});
router.post(
  "/register",
  body("email").trim().isEmail(),
  body("username").trim().isLength({ min: 3 }),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });

    const { username, email, password } = req.body;
    const newUser = await userModel.create({
      email,
      username,
      password: await bcrypt.hash(password, 10),
    });
    res.json(newUser);
  }
);
router.get("/login", (req, res) => {
  res.render("login");
});
router.post(
  "/login",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty)
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(400).json({
        message: "Invalid credentials",
      });
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched)
      return res.status(400).json({
        message: "Invalid credentials",
      });

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      config.jwtSecret
    );

    res.cookie("token", token);
    res.send("Login successfuly");
  }
);

module.exports = router;
