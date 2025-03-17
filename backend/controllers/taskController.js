const { validationResult } = require("express-validator");

const Task = require("../models/task");

// Crear tarea
exports.createTask = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las tareas del usuario
exports.getAllUserTasks = async (req, res) => {
  try {
    const query = req.query;
    if (req.query.search) {
      query.$or = [
        { title: { $regex: req.query.search, $options: "i" } },
        { description: { $regex: req.query.search, $options: "i" } },
      ];
      delete query.search;
    }
    
    const tasks = await Task.find({ userId: req.body.userId, ...query });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener tarea especifica del Usuario
exports.getUserTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      userId: req.body.userId,
      _id: req.params.id,
    });
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar tarea
exports.updateTask = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    const updatedTask = await Task.findOneAndUpdate(
      { userId: req.body.userId, _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar tarea
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
