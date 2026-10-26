import axios from "axios";
import type {NewUserModel} from "../models/newUserModel.ts"

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${apiUrl}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getUserById = async (id: string) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const saveUser = async (newUser: NewUserModel) => {
  try {
    const response = await api.post("/users", newUser);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const findUserByUsername = async (username: string, token: string) => {
  console.log(`Finding user by username: ${username} with token: ${token}`);
  try {
    return await api.get(`/users/username/${username}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    throw error;
  }
}

export { getUsers, getUserById, saveUser, findUserByUsername };