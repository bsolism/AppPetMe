import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../../components/Card";
import ContentCardPet from "../../components/Card/ContentCardPet";
import useApi from "../../hooks/useApi";
import petApi from "../../service/Pets";

import colors from "../../config/colors";

function ListingPets({ route, navigation }) {
  const { params } = route;

  return (
    <View style={styles.container}>
      <FlatList
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
      />
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
