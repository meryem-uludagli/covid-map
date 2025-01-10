import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

export default api;
