import React, { useState, useEffect } from "react";
import { ScrollView, View, Button, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CreditCard from "../../components/FormCreditCard";
import Switch from "../../components/Switch";
import donationApi from "../../service/Donation";
import UploadScreen from "../UploadScreen";
import { Form, SubmitButton } from "../../components/FormComponent";
import routes from "../../Navigation/routes";

import styles from "./styles";

const initialValue = {
  petId: 0,
  profileHouseId: 0,
  cvc: "",
  expiry: "",
  name: "",
  number: "",
  type: "",
  amount: "",
  prefix: "",
  suscription: false,
  valid: false,
};

function Payment({ route, navigation }) {
  const { params } = route;
  const [data, setData] = useState(initialValue);
  const [dataCard, setDataCard] = useState(initialValue);
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  useEffect(() => {
    setDataCard({
      ...dataCard,
      petId: params.petId,
      profileHouseId: params.profileHouseId,
      prefix: "HNL",
    });
  }, []);

  const onSubmit = async (data) => {
    data.cvc = dataCard.cvc;
    data.expiry = dataCard.expiry;
    data.name = dataCard.name;
    data.number = dataCard.number;
    data.type = dataCard.type;
    data.valid = dataCard.valid;
    data.amount = dataCard.amount;
    data.petId = dataCard.petId;
    data.prefix = dataCard.prefix;
    data.profileHouseId = dataCard.profileHouseId;
    data.suscription = dataCard.suscription;
    if (data.valid) {
      setProgress(0);
      setUploadVisible(true);
      const result = await donationApi.addDonation(data, (progress) =>
        setProgress(progress)
      );
      if (!result.ok) {
        setUploadVisible(false);
        return alert("Donation Failed");
      }
      navigation.navigate(routes.VOUCHER, result.data);
    } else {
      alert("No. Tarjeta no valido");
    }
  };
  return (
    <>
      <Form initialValues={initialValue} onSubmit={onSubmit}>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <ScrollView>
          <CreditCard setData={setDataCard} data={dataCard} />
          <View style={styles.segment}>
            <Text style={styles.text}>Suscribir Mensual</Text>
            <Switch
              isEnabled={dataCard.suscription}
              setIsEnabled={(value) =>
                setDataCard({ ...dataCard, suscription: value })
              }
            />
          </View>

          <View style={styles.picker}>
            <View style={styles.head}>
              <Text style={styles.cabecera}>MONTO</Text>
            </View>
            <View style={styles.bodyAmount}>
              <Picker
                style={{
                  width: 100,
                }}
                selectedValue={dataCard.prefix}
                onValueChange={(itemValue, itemIndex) =>
                  setDataCard({ ...dataCard, prefix: itemValue })
                }
              >
                <Picker.Item label="HNL" value="HNL" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
              </Picker>
              <TextInput
                style={styles.text}
                keyboardType="numeric"
                placeholder="0.00"
                value={dataCard.amount}
                onChangeText={(val) =>
                  setDataCard({ ...dataCard, amount: val })
                }
              />
            </View>
          </View>

          <SubmitButton title="Donar" />
        </ScrollView>
      </Form>
    </>
  );
}

export default Payment;
