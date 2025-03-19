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
    throw error
  }
};

export { getAllMyTasks, createTask };
