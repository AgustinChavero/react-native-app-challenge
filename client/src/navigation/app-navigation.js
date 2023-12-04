import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../middlewares/auth-context/auth-context";

import AuthStack from "./auth-stack";
import AppStack from "./app-stack";

const { isLoading, userToken } = useContext(AuthContext);

if (isLoading) {
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size={"large"} />
  </View>;
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigation;
