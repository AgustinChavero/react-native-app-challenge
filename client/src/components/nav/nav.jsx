import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { styles } from "./nav-style";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.icon}>
        <Image source={require("./../../../assets/icons8-menu-24.png")} />
        <Text>Menu</Text>
      </Pressable>

      <View style={styles.title}>
        <Text>Hello, this is a NavBar</Text>
      </View>

      <Pressable style={styles.icon}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

export default NavBar;
