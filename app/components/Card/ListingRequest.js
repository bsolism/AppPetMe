import React, { useState, useEffect } from "react";
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import server from "../../service/server";
import AppText from "../AppTex";
import { Swipeable } from "react-native-gesture-handler";
import routes from "../../navigation/routes";

import colors from "../../config/colors";

function ListingRequest(props) {
  const { item, renderRightActions, navigation } = props;
  const [image, setImage] = useState();

  useEffect(() => {
    imagePet();
  }, []);

  const imagePet = () => {
    const nameImage = item.pet.petPhotos.map((x) => x.image);
    const url = server.URI + "/ImagePet/" + nameImage[0];
    setImage(url);
  };

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate(routes.ADOPTION_REQUEST_DETAIL, item)
          }
        >
          <View style={styles.headerContainer}>
            {image ? (
              <Image style={styles.image} source={{ uri: image }} />
            ) : (
              <Image
                style={styles.image}
                source={require("../../assets/img.png")}
              />
            )}
            <View style={styles.detailHeader}>
              <AppText style={styles.title}>{item.pet.name}</AppText>
              <AppText style={styles.subTitle}>Casa de refugio</AppText>
            </View>
            <View style={styles.option}>
              {item.isActive ? (
                item.isRejected ? (
                  <AppText style={styles.messageRejected}>
                    Peticion Rechazada
                  </AppText>
                ) : !item.isApproved ? (
                  <AppText style={styles.messageWaiting}>
                    Pendiente de Aprobar
                  </AppText>
                ) : (
                  <AppText style={styles.messageApproved}>
                    Peticion Aprobada
                  </AppText>
                )
              ) : null}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  detailHeader: {
    marginLeft: 10,
    justifyContent: "center",
    width: "40%",
  },
  headerContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  option: {
    alignItems: "flex-end",
    width: "40%",
    justifyContent: "center",
  },
  subTitle: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.granite_grey,
  },
  messageApproved: {
    marginLeft: 10,
    fontSize: 15,
    color: colors.granite_grey,
    backgroundColor: colors.green_light,
    textAlign: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  messageWaiting: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.granite_grey,
    backgroundColor: colors.yellow,
    textAlign: "center",
    borderRadius: 20,
  },
  messageRejected: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.white,
    backgroundColor: colors.primary,
    textAlign: "center",
    borderRadius: 20,
  },

  title: {
    marginBottom: 7,
    marginLeft: 10,
  },
});

export default ListingRequest;
