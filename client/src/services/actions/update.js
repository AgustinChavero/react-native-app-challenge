import axios from "axios";
import { DEPLOY } from "../config";

const update = async (id, body, route) => {
  try {
    const response = await axios.put(`${DEPLOY}/${route}/${id}`, body);
    return response.data;
  } catch (error) {
    console.error(`Error updating ${route}:`, error);
    throw error;
  }
};

export { update };
