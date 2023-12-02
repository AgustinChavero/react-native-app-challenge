import axios from "axios";

const getOne = async (id, route) => {
  try {
    const response = await axios.get(`http://localhost:3000/${route}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${route}:`, error);
    throw error;
  }
};

export { getOne };
