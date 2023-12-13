import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./nav-style";

const NavBar = () => {
  const navigation = useNavigation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.navbar}>
      <Pressable style={styles.menuIcon} onPress={toggleMenu}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
        </Svg>
      </Pressable>

      <View style={styles.title}>
        <Text style={styles.titleText}>Kiosco Nachei</Text>
      </View>

      {isMenuOpen && (
        <View
          style={[styles.menu, { width: "100%", height: "700px", alignItems: "center" }]}
        >
          <Text style={styles.menuItem} onPress={() => navigateToScreen("dashboard")}>
            Administracion
          </Text>
          <Text style={styles.menuItem} onPress={() => navigateToScreen("shopping-cart")}>
            Carrito
          </Text>
          <Text style={styles.menuItem} onPress={() => navigateToScreen("products-list")}>
            Productos
          </Text>
          <Text style={styles.menuItem} onPress={() => navigateToScreen("users-list")}>
            Usuarios
          </Text>
        </View>
      )}

      <Pressable style={styles.profileIcon}>
        <Text style={styles.profileText}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default NavBar;
