import React, { useState, useEffect } from "react";
import { View, FlatList, Button, Text } from "react-native";
import Screen from "../../components/Screen";
import Card from "../../components/Card";
import useApi from "../../hooks/useApi";
import petApi from "../../service/Pets";
import AppText from "../../components/AppTex";
import ContentCardPet from "../../components/Card/ContentCardPet";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";

function Home({ route, navigation }) {
  const [category, setCategory] = useState("Little");
  const getPetApi = useApi(petApi.getPets);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    tabPress(navigation);
    getPetApi.request();
  }, [navigation]);

  const tabPress = (navigation) => {
    const listerned = navigation.addListener("tabPress", (e) => {
      setCategory(route.name);
    });

    return listerned;
  };

  return (
    <Screen>
      <View style={styles.screen}>
        {getPetApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getPetApi.request} />
          </>
        )}
        <FlatList
          data={
            getPetApi.data
              ? getPetApi.data.filter((x) => x.category == category)
              : null
          }
          keyExtractor={(pet) => pet.petId.toString()}
          renderItem={({ item }) => (
            <>
              <Card>
                <ContentCardPet
                  dateCreated={item.dateCreated}
                  photoHouse={item.profileHouse.image}
                  nameHouse={item.profileHouse.name}
                  petName={item.name}
                  photos={item.petPhotos}
                  description={item.description}
                  pet={item}
                  navigation={navigation}
                />
              </Card>
            </>
          )}
          refreshing={refreshing}
          onRefresh={() => {
            getPetApi.request();
          }}
        />
      </View>
    </Screen>
  );
}

export default Home;
