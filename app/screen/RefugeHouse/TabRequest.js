import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Screen from "../../components/Screen";
import requestApi from "../../service/RequestAdoption";
import Card from "../../components/Card";
import ListingRequest from "../../components/Card/ListingRequest";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";

function TabRequest(props) {
  const { data, navigation } = props;
  const [dataInfo, setDataInfo] = useState();

  const requestData = async (id) => {
    const res = await requestApi.getRequestById(id);
    if (res.ok) setDataInfo(res.data);
  };
  useEffect(() => {
    requestData(data);
  }, [navigation]);

  return (
    <View>
      <Text>Desde Solicitudes</Text>
      <FlatList
        data={dataInfo}
        keyExtractor={(res) => res.requestAdoptionId.toString()}
        renderItem={({ item }) => (
          <Card>
            <ListingRequest
              item={item}
              navigation={navigation}
              approve={true}
              onRefresh={requestData}
              renderRightActions={() => (
                <ItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </Card>
        )}
      />
    </View>
  );
}

export default TabRequest;
