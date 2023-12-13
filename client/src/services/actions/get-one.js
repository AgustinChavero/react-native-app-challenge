import axios from "axios";
import { DEPLOY } from "../config";

const getOne = async (id, route) => {
  try {
    const response = await axios.get(`${DEPLOY}/${route}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${route}:`, error);
    throw error;
  }
};

export { getOne };
