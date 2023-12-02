import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { useProducts } from "../../zustand/products/products";

const Home = () => {
  const allProducts = useProducts((state) => state.allProducts);
  const fetchData = useProducts((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={allProducts.data?.products}
      renderItem={({ item }) => (
        <View key={item._id}>
          <Text>{item.brand}</Text>
        </View>
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

export default Home;
