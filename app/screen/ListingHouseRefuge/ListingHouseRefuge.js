import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "../../components/Card";
import AppText from "../../components/AppTex";
import useApi from "../../hooks/useApi";
import houseProfileApi from "../../service/ListingHouse";
import ContentListingCard from "../../components/Card/ContentListingCard";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";

import styles from "./styles";

function ListingHouseRefuge({ navigation }) {
  const getProfileHouseApi = useApi(houseProfileApi.getProfileHouse);
  const [data, setData] = useState();

  useEffect(() => {
    refresh(navigation);
  }, [navigation]);

  const refresh = (navigation) => {
    const listerned = navigation.addListener("focus", () => {
      getProfileHouseApi.request();
      setData(getProfileHouseApi.data);
    });
    return listerned;
  };

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
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
          data={getProfileHouseApi.data}
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
