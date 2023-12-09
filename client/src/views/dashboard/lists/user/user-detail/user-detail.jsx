import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getOne } from "../../../../../services/actions/get-one";

import FormUser from "../../../../../components/form/form-user";

import { styles } from "./user-detail-style";

function UserDetail() {
  const route = useRoute();
  const { userId } = route.params;
  const [userDetail, setUserDetail] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const details = await getOne(userId, "user");
        setUserDetail(details);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetail();
  }, [userId, isEditing]);

  const handleToggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  if (!userDetail) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <FormUser user={userDetail.data?.user} editing={handleToggleEdit} />
      ) : (
        <View>
          <Text style={styles.textLabel}>Nombre: {userDetail.data?.user.name}</Text>
          <Text style={styles.textLabel}>Email: {userDetail.data?.user.email}</Text>
          <Text style={styles.textLabel}>Telefono: {userDetail.data?.user.phone}</Text>
          <Text style={styles.textLabel}>
            ¿Esta suspendido?: {userDetail.data?.user.is_deleted ? "Yes" : "No"}
          </Text>
          <Text style={styles.textLabel}>
            ¿Tiene permisos?: {userDetail.data?.user.is_admin ? "Yes" : "No"}
          </Text>

          <TouchableOpacity style={styles.editButton} onPress={handleToggleEdit}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default UserDetail;
