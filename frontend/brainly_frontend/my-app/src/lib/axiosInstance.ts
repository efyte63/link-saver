import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://link-saver-dwzv.onrender.com",
  withCredentials: true,
});

