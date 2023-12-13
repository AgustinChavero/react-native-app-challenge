import axios from "axios";
import { DEPLOY } from "../config";

const getAll = async (route) => {
  try {
    const response = await axios.get(`${DEPLOY}/${route}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getAll };
