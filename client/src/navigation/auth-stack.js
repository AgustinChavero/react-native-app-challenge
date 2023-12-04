import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/login/login";
import Store from "../views/stores/store";
import Home from "../views/home/home";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="store" component={Store} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
