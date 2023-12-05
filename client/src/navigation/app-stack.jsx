import React from "react";
import { View, Text } from "react-native";

import NavBar from "../components/nav/nav";

import Dashboard from "../views/dashboard/dashboard";

const AppStack = () => {
  return (
    <View>
      <NavBar />
      <Dashboard />
    </View>
  );
};

export default AppStack;
