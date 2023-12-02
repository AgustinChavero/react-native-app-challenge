import axios from "axios";

const deleted = async (id, route) => {
  try {
    const response = await axios.delete(`http://localhost:3000/${route}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting ${route}:`, error);
    throw error;
  }
};

export { deleted };
