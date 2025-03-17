const express = require("express");
const { body } = require("express-validator");

const { authMiddleware } = require("../middlewares/auth.middleware");
const { createTask, getAllUserTasks, getUserTask, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post(
  "/",
  [
    body("title").isString().isLength({ min: 3 })
  ],
  authMiddleware,
  createTask
);
router.get('/', authMiddleware, getAllUserTasks);
router.get('/:id', authMiddleware, getUserTask);
router.put(
    "/:id",
    [
        body("title").isString().isLength({ min: 3 })
    ],
    authMiddleware,
    updateTask
);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
