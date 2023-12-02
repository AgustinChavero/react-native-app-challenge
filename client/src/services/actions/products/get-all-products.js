import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/product/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getAllProducts };
