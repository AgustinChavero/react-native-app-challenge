import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

import { loginAuth } from "../../services/auth/login-auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const login = async (email, password) => {
    setIsLoading(true);

    const info = await loginAuth(email, password);
    if (info && info.data && info.data.token) {
      setUserInfo(info.data);
      setUserToken(info.data.token);

      await AsyncStorage.setItem("userInfo", JSON.stringify(info));
      await AsyncStorage.setItem("userToken", info.data.token);
    }

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);

    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
