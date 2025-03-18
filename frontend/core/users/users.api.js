import { requester } from "../requester";

const createUser = async (data) => {
  try {
    const newUser = await requester.post("/auth/register", data);
    console.log("Usuario creado:", newUser);
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
};

export {createUser};
