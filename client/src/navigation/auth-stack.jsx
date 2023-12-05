import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/login/login";
import Home from "../views/home/home";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
