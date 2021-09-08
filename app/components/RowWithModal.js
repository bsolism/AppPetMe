import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import SeparadorTitle from "./SeparadorTitle";
import Icon from "../components/Icon";
import AppText from "./AppTex";

function RowWithModal(props) {
  const { titleRow, iconName, itemName, itemEmail, styleText } = props;
  return (
    <View style={styles.container}>
      <SeparadorTitle title={titleRow} styleText={styleText} />
      <View style={styles.row}>
        <AppText icon={iconName} style={styles.text}>
          {itemName
            ? itemEmail
              ? itemName + ":  " + itemEmail
              : itemName
            : null}
        </AppText>
        <TouchableWithoutFeedback onPress={() => console.log("Name")}>
          <View style={styles.icon}>
            <Icon
              name="square-edit-outline"
              backgroundColor="white"
              iconColor="grey"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    height: 40,
    width: "100%",
  },
  text: {
    marginVertical: 20,
    marginLeft: 5,
    width: "80%",
  },
});

export default RowWithModal;
