import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./home-style";

const Home = () => {
  const navigation = useNavigation();

  const handleLoginRoute = () => {
    navigation.navigate("login");
  };

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.container}>
      <Image source={require("../../../assets/home/home.svg")} style={styles.logo} />
      <Text style={styles.title}>Let's get started</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginRoute}>
        <Text style={styles.buttonText}>Go to login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Home;
