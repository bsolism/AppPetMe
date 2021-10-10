import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import { Form } from "../../components/FormComponent";
import Wizard from "../../components/FormWizard/Wizard";
import initialValues from "../../models/ValueFormAdoption";
import requestAdoptionApi from "../../service/RequestAdoption";
import UploadScreen from "../UploadScreen";
import routes from "../../navigation/routes";
import useAuth from "../../auth/useAuth";

import styles from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name Required").min(1).label("Name"),
  dni: Yup.string().required("DNI Required").min(1).label("Dni"),
  phone: Yup.string().required("Phone Required").min(1).label("Phone"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email Required")
    .min(1)
    .label("Email"),
  address: Yup.string().required("Address Required").min(1).label("Address"),
  city: Yup.string().required("City Required").min(1).label("City"),
  country: Yup.string().required("Country Required").min(1).label("Country"),
  province: Yup.string().required("Province Required").min(1).label("Province"),
  hasPets: Yup.bool(),
  why: Yup.string().required().min(1).label("Why"),
  timeAlone: Yup.number().required("").min(1).max(100).label(""),
});

function AdoptionRequest(props) {
  const { navigation } = props;
  const { params } = props.route;
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { user } = useAuth();

  const handleSubmit = async (request, { resetForm }) => {
    request.petId = params.petId;
    request.profileHouseId = params.profileHouseId;
    request.userId = user.userId;

    setProgress(0);
    setUploadVisible(true);
    const result = await requestAdoptionApi.addRequest(request, (progress) =>
      setProgress(progress)
    );
    console.log(result);

    if (!result.ok) {
      setUploadVisible(false);
      return alert("No se pudo enviar la solicitud");
    } else {
      resetForm();
      alert("Solicitud enviada con exito");
      navigation.navigate(routes.HOME);
    }
  };

  return (
    <View style={styles.containerForm}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Wizard pet={params} />
      </Form>
    </View>
  );
}
export default AdoptionRequest;
