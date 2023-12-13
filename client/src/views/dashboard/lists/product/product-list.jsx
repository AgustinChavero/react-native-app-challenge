import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useProducts } from "../../../../zustand/products/products";

import FormProduct from "../../../../components/form/form-product";

import { styles } from "./product-list-style";

function ProductList() {
  const navigation = useNavigation();

  const [isCreating, setIsCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = useProducts((state) => state.allProducts);
  const fetchData = useProducts((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [isCreating]);

  const handleToggleCreating = () => {
    setIsCreating((prevState) => !prevState);
  };

  const handleProductDetails = (id) => {
    navigation.navigate("product-detail", { productId: id });
  };

  const filteredProducts = allProducts.data?.products.filter((product) =>
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.brand}</Text>
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => handleProductDetails(item._id)}
        >
          <Text style={styles.buttonText}>Detalles</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {isCreating ? (
        <FormProduct editing={handleToggleCreating} />
      ) : (
        <View>
          <TouchableOpacity style={styles.detailButton} onPress={handleToggleCreating}>
            <Text style={styles.buttonText}>Crear Producto</Text>
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por nombre"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <FlatList
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
}

export default ProductList;
