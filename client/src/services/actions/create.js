import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const create = async (body, route) => {
  if (route === "user") {
    let userInfo = await AsyncStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    try {
      const response = await axios.post(
        `http://localhost:3000/${route}/${userInfo.data._id}`,
        body
      );
      return response.data;
    } catch (error) {
      console.error(`Error creating ${route}:`, error);
      throw error;
    }
  } else {
    try {
      const response = await axios.post(`http://localhost:3000/${route}/`, body);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${route}:`, error);
      throw error;
    }
  }
};

export { create };
