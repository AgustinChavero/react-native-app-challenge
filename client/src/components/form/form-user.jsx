import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { useStores } from "../../zustand/stores/stores";

import { create } from "../../services/actions/create";
import { update } from "../../services/actions/update";

import { styles } from "./form-style";

const FormUser = (props) => {
  const allStores = useStores((state) => state.allStores);
  const fetchData = useStores((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    store_id: props.user ? props.user.store_id || "" : "",
    name: props.user ? props.user.name || "" : "",
    email: props.user ? props.user.email || "" : "",
    password: props.user ? props.user.password || "" : "",
    phone: props.user ? props.user.phone || 0 : 0,
  });

  const resetForm = () => {
    setFormData({
      store_id: "",
      name: "",
      email: "",
      password: "",
      phone: 0,
    });
  };

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (!props.user) {
      await create(formData, "user");
      resetForm();
      props.editing();
    } else if (props.user) {
      await update(props.user._id, formData, "user");
      resetForm();
      props.editing();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Donde trabajará:</Text>
      {allStores.data?.stores ? (
        <RNPickerSelect
          style={styles.textInput}
          onValueChange={(value) => handleInputChange("store_id", value)}
          items={allStores?.data?.stores?.map((store) => ({
            key: `${store._id}`,
            label: `${store.street} - ${store.number}`,
            value: `${store._id}`,
          }))}
          placeholder={{
            label: "Selecciona una tienda...",
          }}
        />
      ) : (
        <Text>Cargando tiendas...</Text>
      )}

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("name", text)}
        value={formData.name}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
        secureTextEntry={true}
      />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("phone", parseInt(text))}
        value={formData.phone}
        keyboardType="numeric"
      />

      <Button
        title={props.user ? "Actualizar Usuario" : "Crear Usuario"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default FormUser;
