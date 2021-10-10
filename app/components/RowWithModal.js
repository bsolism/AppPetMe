import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import SeparadorTitle from "./SeparadorTitle";
import Icon from "../components/Icon";
import AppText from "./AppTex";

function RowWithModal(props) {
  const {
    titleRow,
    iconName,
    itemName,
    itemEmail,
    styleWidth,
    styleText,
    style,
    onPress,
    modal = true,
  } = props;
  return (
    <View style={[styles.container, styleWidth]}>
      <SeparadorTitle title={titleRow} styleText={styleText} />
      <View style={styles.row}>
        <AppText icon={iconName} style={[styles.text, style]}>
          {itemName
            ? itemEmail
              ? itemName + ":  " + itemEmail
              : itemName
            : null}
        </AppText>

        {modal ? (
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.icon}>
              <Icon
                name="square-edit-outline"
                backgroundColor="white"
                iconColor="grey"
              />
            </View>
          </TouchableWithoutFeedback>
        ) : null}
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
