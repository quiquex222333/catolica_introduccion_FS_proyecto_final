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

const getFilteredTasks = async ({search, status, untilDate}) => {
  let params = {}
  params = search ? {search} : params;
  params = status ? {...params, status} : params;
  params = untilDate ? {...params, untilDate} : params;  
  
  try {
    const response = await requester.get("/task", params);
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getAllMyTasks,
  getFilteredTasks,
  createTask,
  moveTask,
  updateTask,
  deleteTask,
};
