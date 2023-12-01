import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { login } from "../../services/auth/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log("Respuesta del inicio de sesión:", response);
      setEmail("");
      setPassword("");
      navigation.navigate("store");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <View>
      <Text>Iniciar sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
