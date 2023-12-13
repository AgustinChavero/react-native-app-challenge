import React, { useEffect, useState } from "react";
import { View, Text, FlatList, CheckBox, TextInput } from "react-native";

import { useProducts } from "../../../zustand/products/products";

import FormInvoice from "../../../components/form/form-invoice";

import { styles } from "./shopping-cart-style";

function ShoppingCart() {
  const allProducts = useProducts((state) => state.allProducts);
  const fetchData = useProducts((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleProductSelection = (productId) => {
    const selectedProduct = allProducts.data?.products.find(
      (product) => product._id === productId
    );

    if (selectedProduct) {
      const { _id, brand, price, stock, in_discount, discount_id, store_id } =
        selectedProduct;

      const isAlreadySelected = selectedProducts.some((product) => product._id === _id);

      if (!isAlreadySelected) {
        setSelectedProducts([
          ...selectedProducts,
          {
            _id,
            brand,
            price,
            stock,
            in_discount,
            discount_id,
            store_id,
          },
        ]);
      } else {
        setSelectedProducts(selectedProducts.filter((product) => product._id !== _id));
      }
    }
  };

  const filteredProducts = allProducts.data?.products.filter((product) =>
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }) => {
    const isSelected = selectedProducts.some((product) => product._id === item._id);
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.brand}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={() => handleProductSelection(item._id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FormInvoice
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />

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
  );
}

export default ShoppingCart;
