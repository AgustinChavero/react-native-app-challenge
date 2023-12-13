import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../views/dashboard/dashboard";
import ProductList from "../views/dashboard/lists/product/product-list";
import ProductDetail from "../views/dashboard/lists/product/product-detail/product-detail";
import UserList from "../views/dashboard/lists/user/user-list";
import UserDetail from "../views/dashboard/lists/user/user-detail/user-detail";
import ShoppingCart from "../views/dashboard/invoices/shopping-cart";
import NavBar from "../components/nav/nav";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{ header: () => <NavBar /> }}
      />
      <Stack.Screen
        name="shopping-cart"
        component={ShoppingCart}
        options={{ header: () => <NavBar /> }}
      />
      <Stack.Screen
        name="products-list"
        component={ProductList}
        options={{ header: () => <NavBar /> }}
      />
      <Stack.Screen
        name="product-detail"
        component={ProductDetail}
        options={{ header: () => <NavBar /> }}
      />
      <Stack.Screen
        name="users-list"
        component={UserList}
        options={{ header: () => <NavBar /> }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetail}
        options={{ header: () => <NavBar /> }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
