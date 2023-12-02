import axios from "axios";

const getAll = async (route) => {
  try {
    const response = await axios.get(`http://localhost:3000/${route}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getAll };
