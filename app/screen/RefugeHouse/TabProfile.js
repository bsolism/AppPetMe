import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import RowWithModal from "../../components/RowWithModal";
import TextInputEdit from "../../components/TextInputEdit";
import colors from "../../config/colors";
import {
  Form,
  FormField,
  SwitchForm,
  SubmitButton,
  ErrorMessage,
} from "../../components/FormComponent";
import * as Yup from "yup";
import userApi from "../../service/user";
import houseApi from "../../service/ListingHouse";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Nombre"),
  city: Yup.string().required().label("Ciudad"),
  admin: Yup.string().required().label("Email Administrador"),
  address: Yup.string().required().label("Dirección"),
  email: Yup.string().required().label("Email"),
  phone: Yup.string().required().label("Telefono"),
});

//import styles from "./styles";

function TabProfile(props) {
  const { data, getData } = props;
  const [dataInfo, setDataInfo] = useState(data);
  const [error, setError] = useState(false);

  const onSubmit = async (info) => {
    let changed = 0;
    setError(false);
    info.name != data.name ? changed++ : changed;
    info.city != data.city ? changed++ : changed;
    info.address != data.address ? changed++ : changed;
    info.email != data.email ? changed++ : changed;
    info.phone != data.phone ? changed++ : changed;
    info.admin != dataInfo.user.email ? changed++ : changed;
    if (changed > 0) {
      const res = await handleUserId(info.admin);

      if (res.data != null) {
        info.profileHouseId = data.profileHouseId;
        info.rtn = data.rtn;
        info.accountBank = data.accountBank;
        info.typeAccount = data.typeAccount;
        info.bankName = data.bankName;
        info.adminId = res.data.userId;
        const req = await houseApi.updateHouse(info);
        if (req.ok) {
          setDataInfo(req.data);
          getData(info.profileHouseId);
        }
      } else {
        setError(true);
      }
    }
  };
  const handleUserId = async (email) => {
    const res = await userApi.getUserByEmail(email);
    return res;
  };

  return (
    <Form
      initialValues={{
        admin: dataInfo.user.email,
        name: data.name,
        city: dataInfo.city,
        address: dataInfo.address,
        email: dataInfo.email,
        phone: dataInfo.phone,
        profileHouseId: 0,
        rtn: 0,
        adminId: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <ScrollView style={styles.container}>
        <FormField
          maxLength={255}
          name="name"
          placeholder="Ingrese Nombre"
          label="Nombre"
          icon="home-account"
        />
        <FormField
          maxLength={255}
          name="city"
          placeholder="Ingrese Ciudad"
          label="Ciudad"
          icon="city"
        />
        <FormField
          maxLength={255}
          name="address"
          placeholder="Ingrese Dirección"
          label="Dirección"
          icon="google-maps"
        />
        <FormField
          maxLength={255}
          name="email"
          placeholder="Ingrese Email"
          label="Email"
          icon="email"
        />
        <FormField
          maxLength={255}
          name="phone"
          placeholder="Ingrese Telefono"
          label="Telefono"
          icon="phone"
        />
        <FormField
          maxLength={255}
          name="admin"
          placeholder="Email Administrador"
          label="Email Administrador"
          icon="email"
        />
        <ErrorMessage error="Email no registrado" visible={error} />
        <SubmitButton title="Enviar" />
      </ScrollView>
    </Form>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "65%",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 10,
    marginVertical: 10,
  },
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
  textTitle: {
    fontSize: 12,
  },
});

export default TabProfile;
