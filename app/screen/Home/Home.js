import React from "react";
import { View, FlatList } from "react-native";
import Screen from "../../components/Screen";
import Card from "../../components/Card";
import routes from "../../Navigation/routes";

import pets from "../../models/PetModels";

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
            <Card
              name={params[item].name}
              description={params[item].description}
              photo={params[item].photo}
              title={params[item].title}
              image={params[item].image}
              onPress={() =>
                navigation.navigate(routes.PET_DETAILS, params[item])
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default Home;
