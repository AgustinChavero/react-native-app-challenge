import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useStores } from "../../zustand/stores/stores";

import { create } from "../../services/actions/create";
import { update } from "../../services/actions/update";

import { styles } from "./form-style";

const FormProduct = (props) => {
  const allStores = useStores((state) => state.allStores);
  const fetchData = useStores((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    store_id: props.product ? props.product.store_id || "" : "",
    brand: props.product ? props.product.brand || "" : "",
    price: props.product ? props.product.price || 0 : 0,
    size: props.product ? props.product.size || "" : "",
    stock: props.product ? props.product.stock || 0 : 0,
    description: props.product ? props.product.description || "" : "",
    in_discount: props.product ? props.product.in_discount : false,
    discount_id: props.product ? props.product.discount_id : " ",
  });

  const resetForm = () => {
    setFormData({
      store_id: "",
      brand: "",
      price: 0,
      size: "",
      stock: 0,
      description: "",
      in_discount: false,
      discount_id: "",
    });
  };

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (!props.product) {
      await create(formData, "product");
      resetForm();
      props.editing();
    } else if (props.product) {
      await update(props.product._id, formData, "product");
      resetForm();
      props.editing();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Donde se venderá:</Text>
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

      <Text style={styles.label}>Marca:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("brand", text)}
        value={formData.brand}
      />

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          const numericValue = parseFloat(text);
          if (!isNaN(numericValue) || text === "" || text === "0") {
            handleInputChange("price", isNaN(numericValue) ? "" : numericValue);
          }
        }}
        value={formData.price === "" ? "" : formData.price.toString()}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Tamaño:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => handleInputChange("size", text)}
        value={formData.size}
      />

      <Text style={styles.label}>Stock:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          const numericValue = parseInt(text, 10);
          if (!isNaN(numericValue) || text === "" || text === "0") {
            handleInputChange("stock", isNaN(numericValue) ? "" : numericValue);
          }
        }}
        value={formData.stock === "" ? "" : formData.stock.toString()}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descripcion:</Text>
      <TextInput
        style={[styles.textInput, { height: 100 }]}
        onChangeText={(text) => handleInputChange("description", text)}
        value={formData.description}
        multiline={true}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>¿Está en descuento?</Text>
        <Switch
          value={formData.in_discount}
          onValueChange={(value) => handleInputChange("in_discount", value)}
        />
      </View>

      {formData.in_discount && (
        <>
          <Text style={styles.label}>Tipo de descuento:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleInputChange("discount_id", text)}
            value={formData.discount_id}
          />
        </>
      )}

      <Button
        style={styles.button}
        title={props.product ? "Actualizar Producto" : "Crear Producto"}
        onPress={handleSubmit}
      />
    </View>
  );
};

console.error = (message) => {
  if (message.startsWith("Warning: `value` prop on `select` should not be null")) {
    return;
  }
  console.warn(message);
};

export default FormProduct;
