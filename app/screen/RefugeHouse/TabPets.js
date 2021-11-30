import React, { useState } from "react";
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
import houseApi from "../../service/ListingHouse";
import useApi from "../../hooks/useApi";

import colors from "../../config/colors";

function TabPets(props) {
  const { data, navigation } = props;
  const [infoData, setInfoData] = useState(data);
  const [dataHouse, setDataHouse] = useState({
    name: data.name,
    city: data.city,
    address: data.address,
  });

  const onRefresh = async () => {
    const res = await houseApi.getProfileHouseById(infoData.profileHouseId);
    if (res.ok) {
      setInfoData(res.data);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={infoData.pets}
        keyExtractor={(pet) => pet.petId.toString()}
        renderItem={({ item }) => (
          <Card>
            <ContentCardPet
              editable={true}
              photoHouse={infoData.image}
              nameHouse={infoData.name}
              petName={item.name}
              photos={item.petPhotos}
              description={item.description}
              pet={item}
              navigation={navigation}
              profileHouse={dataHouse}
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
            profileHouseId: infoData.profileHouseId,
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
