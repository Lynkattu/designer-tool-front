import axios from "axios";
import type { LoginModel } from "../models/loginModel";

const api = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

const login = async (login: LoginModel) => {
    try {
        return api.post('/login', login);
    } catch(error) {
        console.log(`Error on authentication: ${error}`);
        throw error;
    }
}

const logout = async () => {
  try {
    await api.post('/logout')
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export {login, logout}