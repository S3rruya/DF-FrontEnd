import axios from "axios";

export const userRequests = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 4000,
});
