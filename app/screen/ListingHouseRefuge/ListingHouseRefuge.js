import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../../components/Card";
import AppText from "../../components/AppTex";
import useApi from "../../hooks/useApi";
import houseProfileApi from "../../service/ListingHouse";
import ContentListingCard from "../../components/Card/ContentListingCard";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";
import useAuth from "../../auth/useAuth";
import Button from "../../components/Button";

import styles from "./styles";

function ListingHouseRefuge({ navigation }) {
  const getProfileHouseApi = useApi(houseProfileApi.getProfileHouse);
  const serviceHouse = useApi(houseProfileApi.deletedHouse);
  const getProfileHouseApiById = useApi(houseProfileApi.getHouseByUserId);
  const [data, setData] = useState();
  const { user } = useAuth();

  const refresh = (navigation) => {
    const listerned = navigation.addListener("focus", () => {
      getProfileHouseApi.request();
    });

    return listerned;
  };
  useEffect(() => {
    refresh(navigation);
  }, [navigation]);

  const handleDelete = (item) => {
    
    const res = serviceHouse.request(item.profileHouseId);
    getProfileHouseApi.setData(
      getProfileHouseApi.data.filter(
        (x) => x.profileHouseId != item.profileHouseId
      )
    );

   
  };

  return (
    <View style={styles.container}>
      {getProfileHouseApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getProfileHouseApi.request} />
        </>
      )}
      <View style={styles.title}>
        <AppText>Casas de Refugio</AppText>
      </View>
      <View>
        <FlatList
          data={
            user.rol != "1"
              ? getProfileHouseApi.data.filter(
                  (x) => x.userId == parseInt(user.userId)
                )
              : getProfileHouseApi.data
          }
          keyExtractor={(house) => house.profileHouseId.toString()}
          renderItem={({ item }) => (
            <Card>
              <ContentListingCard
                listing={item}
                navigation={navigation}
                renderRightActions={() => (
                  <ItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            </Card>
          )}
        />
      </View>
    </View>
  );
}

export default ListingHouseRefuge;
