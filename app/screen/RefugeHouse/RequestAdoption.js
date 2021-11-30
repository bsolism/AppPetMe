import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Card from "../../components/Card";
import ListingRequest from "../../components/Card/ListingRequest";
import useApi from "../../hooks/useApi";
import requestApi from "../../service/RequestAdoption";

import styles from "./styles";

function RequestAdoption(props) {
  const getRequestApi = useApi(requestApi.getRequestById);
  const { params } = props.route;
  const { navigation } = props;
  console.log(params);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Estamos en Solicitudes</Text>
      <Card>
        <ListingRequest item={getRequestApi.data} />
      </Card>
    </View>
  );
}

export default RequestAdoption;
