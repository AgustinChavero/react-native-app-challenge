import axios from "axios";
import { DEPLOY } from "../config";

const deleted = async (id, route) => {
  try {
    const response = await axios.delete(`${DEPLOY}/${route}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting ${route}:`, error);
    throw error;
  }
};

export { deleted };
