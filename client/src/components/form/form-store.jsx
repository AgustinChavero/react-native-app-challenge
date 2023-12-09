import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { create } from "../../services/actions/create";
import { update } from "../../services/actions/update";
import { styles } from "./form-style";

const FormStore = (store) => {
  const [formData, setFormData] = useState({
    street: store ? store.street : "",
    number: store ? store.number : 0,
    code_zone: store ? store.code_zone : 0,
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (!store) {
      await create(formData, "store");
    } else if (store) {
      await update(formData, "store");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calle:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("street", text)}
        value={formData.street}
      />

      <Text style={styles.label}>Número:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("number", parseInt(text))}
        value={formData.number}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Código de Zona:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("code_zone", parseInt(text))}
        value={formData.code_zone}
        keyboardType="numeric"
      />

      <Button
        title={store ? "Actualizar Tienda" : "Crear Tienda"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default FormStore;
