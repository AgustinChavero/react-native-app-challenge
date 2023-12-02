import React, { useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useStores } from "../../zustand/stores/stores";

const Store = () => {
  const navigation = useNavigation();

  const allStores = useStores((state) => state.allStores);
  const fetchData = useStores((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  const handleStorePress = () => {
    navigation.navigate("home");
  };

  return (
    <FlatList
      data={allStores.data?.stores}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={handleStorePress} key={item._id}>
          <View>
            <Text>{item.street}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

export default Store;
