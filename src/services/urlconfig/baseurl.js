import axios from "axios";

// const baseURL="http://localhost:1996/";
const baseURL="https://orinson-backend.onrender.com";

const publicAxios = axios.create({baseURL});

export {publicAxios};