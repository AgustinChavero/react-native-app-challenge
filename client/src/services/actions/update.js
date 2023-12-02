import axios from "axios";

const update = async (id, body, route) => {
  try {
    const response = await axios.put(`http://localhost:3000/${route}/${id}`, body);
    return response.data;
  } catch (error) {
    console.error(`Error updating ${route}:`, error);
    throw error;
  }
};

export { update };
