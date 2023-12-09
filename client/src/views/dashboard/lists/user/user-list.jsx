import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useUsers } from "../../../../zustand/users/users";

import FormUser from "../../../../components/form/form-user";

import { styles } from "./user-list-style";

function UserList() {
  const navigation = useNavigation();

  const [isCreating, setIsCreating] = useState(false);

  const allUsers = useUsers((state) => state.allUsers);
  const fetchData = useUsers((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [isCreating]);

  const handleToggleCreating = () => {
    setIsCreating((prevState) => !prevState);
  };

  const handleUserDetails = (id) => {
    navigation.navigate("user-detail", { userId: id });
  };

  const renderUserItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => handleUserDetails(item._id)}
        >
          <Text style={styles.buttonText}>Detalles</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {isCreating ? (
        <FormUser editing={handleToggleCreating} />
      ) : (
        <View>
          <TouchableOpacity style={styles.detailButton} onPress={handleToggleCreating}>
            <Text style={styles.buttonText}>Crear Usuario</Text>
          </TouchableOpacity>
          <FlatList
            data={allUsers.data?.users}
            renderItem={renderUserItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </View>
  );
}

export default UserList;
