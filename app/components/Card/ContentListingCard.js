import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import server from "../../service/server";
import AppText from "../AppTex";
import { Swipeable } from "react-native-gesture-handler";
import routes from "../../Navigation/routes";

import styles from "./styles";

function ContentListingCard(props) {
  const { listing, renderRightActions, navigation } = props;

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={() => navigation.navigate(routes.HOUSE_PROFILE, listing)}
        >
          <View style={styles.headerContainer}>
            {listing.image == null ? (
              <Image
                style={styles.image}
                source={require("../../assets/img.png")}
              />
            ) : (
              <Image
                style={styles.image}
                source={{
                  uri: server.URI + "/houseimageprofile/" + listing.image,
                }}
              />
            )}
            <View style={styles.detailHeader}>
              <AppText style={styles.title}>{listing.name}</AppText>
              <AppText style={styles.subTitle}>
                {listing.address}, {listing.city}
              </AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </View>
  );
}

export default ContentListingCard;
