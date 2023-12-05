import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg"; // Importa los componentes de SVG desde react-native-svg
import { styles } from "./nav-style";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={[styles.navbar, { width: "100%" }]}>
      <Pressable style={styles.menuIcon} onPress={toggleMenu}>
        {/* Utiliza un SVG para mostrar el icono */}
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
        <Text style={styles.titleText}>Hello, this is a NavBar</Text>
      </View>

      {isMenuOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Option 1</Text>
          <Text style={styles.menuItem}>Option 2</Text>
          <Text style={styles.menuItem}>Option 3</Text>
          {/* Agrega las opciones del menú */}
        </View>
      )}

      <Pressable style={styles.profileIcon}>
        <Text style={styles.profileText}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default NavBar;
