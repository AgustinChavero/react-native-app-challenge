import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./login-style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
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
