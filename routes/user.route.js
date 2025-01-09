const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/register", (req, res) => {
  res.render("register");
});
router.post(
  "/register",
  body("email").trim().isEmail(),
  body("username").trim().isLength({ min: 3 }),
  body("password").trim().isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });
    res.send(errors);
  }
);

module.exports = router;
