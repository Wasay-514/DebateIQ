import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const startDebate = async (payload) => {
  const response = await API.post("/api/debate/start", payload);
  return response.data;
};

export default API;



