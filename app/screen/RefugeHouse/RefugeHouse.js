import React, { useState, useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import TabRefuge from "./TabRefuge";
import ImagePicker from "../../components/ImagePicker";
import server from "../../service/server";
import useApi from "../../hooks/useApi";
import houseApi from "../../service/ListingHouse"

import styles from "./styles";



function RefugeHouse(props) {
  const { params } = props.route;
  const [data, setData] = useState(params)
  const [imageUri, setImageUri] = useState(
    server.URI + "/HouseImageProfile/" + data.image
  );
  const [imageChange, setImageChange] = useState(false);
  const houseUpdate = useApi(houseApi.updateProfileHouse);
  

  useEffect(() => {
   submitImage(imageChange)
  }, [imageChange])

  

  const submitImage= async (image)=> {
    if(image){
      const dataInfo = {
        profileHouseId:data.profileHouseId,
        file: imageUri
      }
      const res = await houseUpdate.request(dataInfo, "file");
      console.log(res)
      if(res.ok){
         setData({...data, image: res.data.image})
      }
    }
    
    setImageChange(false)

  }

  return (
    <>
      <View style={styles.containerImage}>
        <ImagePicker
          imageUri={imageUri}
          setImageUri={setImageUri}
          setImageChange={setImageChange}
        />
     

     
      </View>


 
      <TabRefuge data={data}/>
    </>
  );
}

export default RefugeHouse;
