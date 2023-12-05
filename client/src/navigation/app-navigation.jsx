import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../middlewares/auth-context/auth-context";
import AuthStack from "./auth-stack";
import AppStack from "./app-stack";

const AppNavigation = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigation;
