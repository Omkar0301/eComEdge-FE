import { BASE_URL } from "@/constants/config";
import axios from "axios";

const apiInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default apiInstance;
