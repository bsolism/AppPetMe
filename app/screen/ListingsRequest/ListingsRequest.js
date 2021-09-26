import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../../components/Card";
import ListingRequest from "../../components/Card/ListingRequest";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";
import AppText from "../../components/AppTex";
import UserApi from "../../service/user";
import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";

import styles from "./styles";

function ListingsRequest({ navigation }) {
  const getUserApi = useApi(UserApi.getUserByEmail);
  const { user } = useAuth();

  useEffect(() => {
    navigation.addListener("focus", () => {
      getUserApi.request(user.email);
    });
  }, [navigation]);

  const handleDelete = () => {
    console.log("Item Deleted");
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Solicitudes de Adopción</AppText>
      {getUserApi.data ? (
        getUserApi.data.requestAdoptions == undefined ||
        getUserApi.data.requestAdoptions.length == 0 ? (
          <AppText style={styles.title}>Aun sin solicitudes</AppText>
        ) : (
          <FlatList
            data={getUserApi.data.requestAdoptions}
            keyExtractor={(request) => request.requestAdoptionId.toString()}
            renderItem={({ item }) => (
              <Card>
                <ListingRequest
                  item={item}
                  navigation={navigation}
                  renderRightActions={() => (
                    <ItemDeleteAction onPress={() => handleDelete()} />
                  )}
                />
              </Card>
            )}
          />
        )
      ) : (
        <AppText style={styles.title}>No se recuperaron los datos</AppText>
      )}
    </View>
  );
}

export default ListingsRequest;
