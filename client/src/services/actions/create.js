import axios from "axios";

const create = async (body, route) => {
  try {
    const response = await axios.post(`http://localhost:3000/${route}/`, body);
    return response.data;
  } catch (error) {
    console.error(`Error creating ${route}:`, error);
    throw error;
  }
};

export { create };
