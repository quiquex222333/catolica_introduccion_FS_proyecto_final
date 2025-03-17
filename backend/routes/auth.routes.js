const express = require("express");
const { body } = require("express-validator");

const { createUser } = require("../controllers/userController");

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  createUser
);

module.exports = router;
