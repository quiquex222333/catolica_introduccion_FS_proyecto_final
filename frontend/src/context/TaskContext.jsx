import { createContext, useContext, useState, useEffect } from "react";
import {
  createTask,
  deleteTask,
  getAllMyTasks,
  getFilteredTasks,
  moveTask,
  updateTask,
} from "../core/api/tasks.api";

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Cargar tareas desde la API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllMyTasks();
        setTasks(data); // Suponiendo que data es un array de tareas
      } catch (error) {
        setTasks([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Obtener todas las tareas
  const getAllTasks = async () => {
    try {
      const data = await getAllMyTasks();
      setTasks(data);
    } catch (error) {
      throw error;
    }
  };

  // Agregar una tarea nueva y enviarla a la API
  const addTask = async (title, description, untilDate) => {
    try {
      const response = await createTask({
        title: title,
        description: description,
        untilDate: untilDate,
      });
      setTasks([...tasks, response]);
    } catch (error) {
      throw error;
    }
  };

  // Actualizar estado de tarea en la API
  const updateTaskStatus = async (task) => {
    try {
      await moveTask(task);
      const newStatus = task.status === "pending" ? "in-progress" : "completed";
      setTasks(
        tasks.map((taskMap) =>
          task._id === taskMap._id ? { ...task, status: newStatus } : taskMap
        )
      );
    } catch (error) {
      throw error;
    }
  };

  // Actualizar estado de tarea en la API
  const updateTaskContent = async (task) => {
    try {
      await updateTask(task._id, task.title, task.description, task.untilDate);
      setTasks(
        tasks.map((taskMap) =>
          task._id === taskMap._id ? { ...task } : taskMap
        )
      );
    } catch (error) {
      throw error;
    }
  };

  // Actualizar estado de tarea en la API
  const eraseTask = async (task) => {
    try {
      await deleteTask(task);
      setTasks(tasks.filter((taskMap) => taskMap._id !== task._id));
    } catch (error) {
      throw error;
    }
  };

  // Obtener tareas con filtro
  const onFilter = async ({search, status, untilDate}) => {
    try {
      const response = await getFilteredTasks({search, status, untilDate});
      setTasks(response);
    } catch (error) {
      throw error;
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getAllTasks,
        addTask,
        updateTaskStatus,
        updateTaskContent,
        eraseTask,
        onFilter,
        loading,
        error,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
