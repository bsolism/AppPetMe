import React, {useEffect} from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Card from "../../components/Card";
import ContentCardPet from "../../components/Card/ContentCardPet";

import colors from "../../config/colors";

function ListingPets({ route, navigation }) {
  const { params } = route;

  console.log(params)

 return (
    <View style={styles.container}>
      <Text>{params}</Text>
     {/* <FlatList
        data={params.pets}
        keyExtractor={(pet) => pet.petId.toString()}
        renderItem={({ item }) => (
          <Card>
            <ContentCardPet
              editable={true}
              photoHouse={params.image}
              nameHouse={params.name}
              petName={item.name}
              photos={item.petPhotos}
              description={item.description}
              pet={item}
              navigation={navigation}
            />
          </Card>
        )}
      />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.light,
  },
});
export default ListingPets;
