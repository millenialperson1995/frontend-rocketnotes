import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-rocketnotes-z21v.onrender.com",
});
