import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getOne } from "../../../../../services/actions/get-one";

import FormProduct from "../../../../../components/form/form-product";

import { styles } from "./product-detail-style";

function ProductDetail() {
  const route = useRoute();
  const { productId } = route.params;
  const [productDetail, setProductDetail] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const details = await getOne(productId, "product");
        setProductDetail(details);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [productId, isEditing]);

  const handleToggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  if (!productDetail) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <FormProduct product={productDetail.data?.product} editing={handleToggleEdit} />
      ) : (
        <View>
          <Text style={styles.textLabel}>Marca: {productDetail.data?.product.brand}</Text>
          <Text style={styles.textLabel}>
            Precio: {productDetail.data?.product.price}
          </Text>
          <Text style={styles.textLabel}>Tamaño: {productDetail.data?.product.size}</Text>
          <Text style={styles.textLabel}>Stock: {productDetail.data?.product.stock}</Text>
          <Text style={styles.textLabel}>
            Descripcion: {productDetail.data?.product.description}
          </Text>
          <Text style={styles.textLabel}>
            Cantidad de ventas: {productDetail.data?.product.quantity_sold}
          </Text>
          <Text style={styles.textLabel}>
            En descuento: {productDetail.data?.product.in_discount ? "Yes" : "No"}
          </Text>
          <Text style={styles.textLabel}>
            Desactivado: {productDetail.data?.product.is_deleted ? "Yes" : "No"}
          </Text>

          <TouchableOpacity style={styles.editButton} onPress={handleToggleEdit}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default ProductDetail;
