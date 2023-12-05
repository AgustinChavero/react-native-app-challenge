import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../middlewares/auth-context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

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
      <TouchableOpacity onPress={login(email, password)}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
