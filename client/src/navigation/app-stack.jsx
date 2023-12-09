import React from "react";
// import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../views/dashboard/dashboard";
import ProductList from "../views/dashboard/lists/product/product-list";
import ProductDetail from "../views/dashboard/lists/product/product-detail/product-detail";
import UserList from "../views/dashboard/lists/user/user-list";
import UserDetail from "../views/dashboard/lists/user/user-detail/user-detail";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="products-list" component={ProductList} />
      <Stack.Screen
        name="product-detail"
        component={ProductDetail}
        initialParams={{ productId: null }}
      />
      <Stack.Screen name="users-list" component={UserList} />
      <Stack.Screen
        name="user-detail"
        component={UserDetail}
        initialParams={{ userId: null }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
