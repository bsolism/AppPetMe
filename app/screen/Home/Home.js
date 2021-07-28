import React from "react";
import { View, FlatList } from "react-native";
import Screen from "../../components/Screen";
import Card from "../../components/Card";

import styles from "./styles";

function Home({ route, navigation }) {
  const { params } = route;

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={Object.keys(params)}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <Card pet={params[item]} navigation={navigation} />
          )}
        />
      </View>
    </Screen>
  );
}

export default Home;
