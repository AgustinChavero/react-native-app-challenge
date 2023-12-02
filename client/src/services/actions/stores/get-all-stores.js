import axios from "axios";

const getAllStores = async () => {
  try {
    const response = await axios.get("http://localhost:3000/store/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getAllStores };
