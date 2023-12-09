import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../middlewares/auth-context/auth-context";
import AuthStack from "./auth-stack";
import AppStack from "./app-stack";

const AppNavigation = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>{userToken ? <AppStack /> : <AuthStack />}</NavigationContainer>
  );
};

export default AppNavigation;
