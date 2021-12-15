import React from "react";
import { View } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";

import styles from "./styles";

function CreditCard(props) {
  const { data, setData } = props;
  _onChange = (formData) => {
    setData({
      ...data,
      cvc: formData.values.cvc,
      expiry: formData.values.expiry,
      name: formData.values.name,
      number: formData.values.number,
      type: formData.values.type,
      valid: formData.valid,
    });
  };
  return (
    <View style={styles.container}>
      <CreditCardInput
        horizontal={false}
        autoFocus
        requiresName
        requiresCVC
        labelStyle={styles.label}
        inputStyle={styles.input}
        validColor={"black"}
        invalidColor={"red"}
        placeholderColor={"darkgray"}
        onChange={_onChange}
      />
    </View>
  );
}

export default CreditCard;
