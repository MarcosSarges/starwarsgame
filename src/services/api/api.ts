import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.co/api/",
  headers: {
    "content-type": "application/json"
  }
});

export default api;
