const express = require("express");
const { body, header } = require("express-validator");

const {
  createUser,
  userLogin,
  userMe,
} = require("../controllers/userController");

const router = express.Router();

router.post(
  "/register",
  [
    body("name").isString().isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  createUser
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  userLogin
);

router.get("/me", userMe);

module.exports = router;
