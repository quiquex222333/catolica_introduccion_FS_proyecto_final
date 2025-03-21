import { requester } from "../requester";

const getAllMyTasks = async () => {
  try {
    const tasks = await requester.get("/task");
    return tasks;
  } catch (error) {
    throw error;
  }
};

const createTask = async (data) => {
  try {
    const newTask = await requester.post("/task", data);
    return newTask;
  } catch (error) {
    throw error;
  }
};

const moveTask = async (task) => {
  try {
    const newStatus = task.status === "pending" ? "in-progress" : "completed";
    await requester.put(`/task/${task._id}`, {
      title: task.title,
      status: newStatus,
    });
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, title, description, untilDate) => {
  try {
    await requester.put(`/task/${id}`, {
      title: title,
      description: description,
      untilDate: untilDate,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (task) => {
  try {
    await requester.delete(`/task/${task._id}`);
  } catch (error) {
    throw error;
  }
};

export { getAllMyTasks, createTask, moveTask, updateTask, deleteTask };
