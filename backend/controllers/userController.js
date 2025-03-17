const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { encrypt } = require("../core/utils");

// Crear un usuario
exports.createUser = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    req.body.password = await encrypt(req.body.password);

    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.userLogin = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatchPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isMatchPassword) {
      return res.status(400).json({ message: "Contraseña no valida" });
    }

    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login exitoso", token: jwtToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// obtener datos del usuario
exports.userMe = async (req, res) => {
  try {
    const {name, email} = await User.findById(req.body.userId);
    return res.status(200).json({name, email});
  } catch (error) {
    return res.status(401).json({ message: error });
  }
}
