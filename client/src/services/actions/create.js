import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEPLOY } from "../config";

const create = async (body, route) => {
  if (route === "user") {
    let userInfo = await AsyncStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    try {
      const response = await axios.post(`${DEPLOY}/${route}/${userInfo.data._id}`, body);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${route}:`, error);
      throw error;
    }
  } else {
    try {
      const response = await axios.post(`${DEPLOY}/${route}/`, body);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${route}:`, error);
      throw error;
    }
  }
};

export { create };
