import { requester } from "../requester";
import Cookies from 'js-cookie';

const createUser = async (data) => {
  try {
    await requester.post("/auth/register", data);
  } catch (error) {
    throw error;
  }
};

const loginUser = async (data) => {
  try {
    const response = await requester.post("/auth/login", data);
    Cookies.set('authToken', response.token);
    console.log(response);
  } catch (error) {
    throw error;
  }
};

const logoutUser = () => {
  try {
    Cookies.remove("authToken");
  } catch (error){
    throw error;
  }
}

export { createUser, loginUser, logoutUser };
