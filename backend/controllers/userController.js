const { validationResult } = require("express-validator");

const User = require("../models/user");
const { encrypt } = require("../core/utils");

// Crear un cliente
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
