import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "../../services/actions/create";

import { styles } from "./form-style";

const FormInvoice = ({ selectedProducts, setSelectedProducts }) => {
  useEffect(() => {
    const getUserInfo = async () => {
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      setFormData({
        store_id: `${userInfo.data.store_id}`,
        user_id: `${userInfo.data._id}`,
        buyer_dni: "",
        buyer_name: "",
        products: [],
      });
    };

    getUserInfo();
  }, []);

  const [formData, setFormData] = useState({
    store_id: "",
    user_id: "",
    buyer_dni: "",
    buyer_name: "",
    products: [],
  });

  const resetForm = () => {
    setFormData({
      store_id: "",
      user_id: "",
      buyer_dni: "",
      buyer_name: "",
      products: [],
    });
  };

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    const invoiceData = {
      store_id: formData.store_id,
      user_id: formData.user_id,
      buyer_dni: formData.buyer_dni,
      buyer_name: formData.buyer_name,
      products: selectedProducts,
    };

    await create(invoiceData, "invoice");
    resetForm();
    setSelectedProducts([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>DNI del Comprador:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("buyer_dni", text)}
        value={formData.buyer_dni}
      />

      <Text style={styles.label}>Nombre del Comprador:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("buyer_name", text)}
        value={formData.buyer_name}
      />

      <Button style={styles.button} title="Facturar" onPress={handleSubmit} />
    </View>
  );
};

export default FormInvoice;
