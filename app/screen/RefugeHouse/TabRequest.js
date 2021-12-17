import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Screen from "../../components/Screen";
import requestApi from "../../service/RequestAdoption";
import Card from "../../components/Card";
import ListingRequest from "../../components/Card/ListingRequest";
import ItemDeleteAction from "../../components/Card/ItemDeleteAction";
import useApi from "../../hooks/useApi";

function TabRequest(props) {
  const { data, navigation } = props;
  const [dataInfo, setDataInfo] = useState();
  const updateApi = useApi(requestApi.update);

  const requestData = async (id) => {
    const res = await requestApi.getRequestByHouseId(id);
    if (res.ok) setDataInfo(res.data.filter((x) => x.isActive == 1));
  };
  useEffect(() => {
    requestData(data);
  }, [navigation]);

  const handleDelete = (item) => {
    const dataUpdate = {
      requestAdoptionId: item.requestAdoptionId,
      hasPets: item.hasPets,
      isApproved: item.isApproved,
      isActive: false,
      isRejected: item.isRejected,
    };
    updateApi.request(dataUpdate);
    setDataInfo(
      dataInfo.filter((x) => x.requestAdoptionId !== item.requestAdoptionId)
    );
  };

  return (
    <View>
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
