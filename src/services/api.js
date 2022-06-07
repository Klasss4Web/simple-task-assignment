import axios from "axios";

export * from "./routes.constants";

export const baseURL = "https://stage.api.sloovi.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json ",
    // "Origin": "http://localhost:3000",
    // "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

const addTokenToRequest = async (req) => {
  const token = localStorage.getItem("11#221#");
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
