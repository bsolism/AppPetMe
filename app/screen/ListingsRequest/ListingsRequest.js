import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../../components/Card";
import ListingRequest from "../../components/Card/ListingRequest";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";
import AppText from "../../components/AppTex";
import UserApi from "../../service/user";
import requestService from "../../service/RequestAdoption";
import useApi from "../../hooks/useApi";
import useAuth from "../../auth/useAuth";

import styles from "./styles";

function ListingsRequest({ navigation }) {
  const getAdoptionsApi = useApi(requestService.getRequestByUserId);
  const updateApi = useApi(requestService.update);
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getData();
  }, [navigation]);

  const getData = () => {
    navigation.addListener("focus", () => {
      getAdoptionsApi.request(user.userId);
    });
  };

  const handleDelete = (item) => {
    const dataUpdate = {
      requestAdoptionId: item.requestAdoptionId,
      hasPets: item.hasPets,
      isApproved: item.isApproved,
      isActive: false,
      isRejected: item.isRejected,
    };
    updateApi.request(dataUpdate);

    getAdoptionsApi.setData(
      getAdoptionsApi.data.filter(
        (x) => x.requestAdoptionId !== item.requestAdoptionId
      )
    );
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Solicitudes de Adopción</AppText>
      {getAdoptionsApi.data ? (
        getAdoptionsApi.data == undefined ||
        getAdoptionsApi.data.length == 0 ? (
          <AppText style={styles.title}>Aun sin solicitudes</AppText>
        ) : (
          <FlatList
            data={getAdoptionsApi.data.filter((x) => x.isActive == true)}
            keyExtractor={(request) => request.requestAdoptionId.toString()}
            renderItem={({ item }) => (
              <Card>
                <ListingRequest
                  item={item}
                  navigation={navigation}
                  renderRightActions={() => (
                    <ItemDeleteAction onPress={() => handleDelete(item)} />
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
