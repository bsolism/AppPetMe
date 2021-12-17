import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

function RowDetail({
  description,
  detail,
  widhtLeft = "45%",
  widhtRight = "45%",
}) {
  return (
    <View style={styles.row}>
      <View style={{ width: widhtLeft }}>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <View style={({ width: widhtRight }, styles.textRight)}>
        <Text style={styles.textDetail}>{detail}</Text>
      </View>
    </View>
  );
}

export default RowDetail;
