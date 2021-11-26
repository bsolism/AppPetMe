import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card";
import ContentCardPet from "../../components/Card/ContentCardPet";
import ActionButton from "../../components/ActionButton";
import Icon from "../../components/Icon";
import routes from "../../Navigation/routes";

import colors from "../../config/colors";

function TabPets(props) {
  const { data, navigation } = props;

  const onRefresh = () => {
    //TODO: Hacer consulta y update
    console.log("Update State");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.pets}
        keyExtractor={(pet) => pet.petId.toString()}
        renderItem={({ item }) => (
          <Card>
            <ContentCardPet
              editable={true}
              photoHouse={data.image}
              nameHouse={data.name}
              petName={item.name}
              photos={item.petPhotos}
              description={item.description}
              pet={item}
              navigation={navigation}
            />
          </Card>
        )}
      />
      <ActionButton
        size={50}
        color={colors.light_blue}
        backgroundColor={colors.white}
        onPress={() =>
          navigation.navigate(routes.FORM_ADD_PET, {
            profileHouseId: data.profileHouseId,
            onGoBack: onRefresh,
          })
        }
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
    height: "75%",
  },
});

export default TabPets;
