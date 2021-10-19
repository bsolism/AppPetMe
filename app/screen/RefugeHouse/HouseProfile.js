import React, { useState, useEffect } from "react";
import { View, TouchableHighlight, Text, TextInput} from "react-native";
import ImagePicker from "../../components/ImagePicker";
import server from "../../service/server";
import useApi from "../../hooks/useApi";
import houseApi from "../../service/ListingHouse"
import TabPets from "./TabPets";
import TabProfile from "./TabProfile";

import styles from "./styles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

function HouseProfile(props) {
   {/* const { params } = props.route;
    const [data, setData] = useState(params)
    const [imageUri, setImageUri] = useState(
      server.URI + "/HouseImageProfile/" + data.image
    );*/}
    const [tab, setTab] = useState(1)
    const [text, setText] = useState()
   {/* const [imageChange, setImageChange] = useState(false);
    const houseUpdate = useApi(houseApi.updateProfileHouse);

    useEffect(() => {
        submitImage(imageChange)
       }, [imageChange])*/}

       {/*const submitImage= async (image)=> {
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
      }*/}
      const press=(num)=>{
        setTab(num)
    }
   

    return (
      <View>
        <View style={styles.containerImage}>
         {/* <ImagePicker
            imageUri={imageUri}
            setImageUri={setImageUri}
            setImageChange={setImageChange}
         />*/}
         <TextInput 
         style={{width:"100%", borderWidth:1, borderColor:"black"}}

         value={text}
         onChangeText={(value) => setText(value)}
         />
         
        </View>
        <View style={styles.tabButton}>
          <TouchableHighlight
            style={
              tab == 1
                ? styles.tabOnPress
                : styles.tabOutPress
            }
            onPress={() => press(1)}
          >
            <Text style={styles.textTab}>Mascotas</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              tab == 2
              ? styles.tabOnPress
              : styles.tabOutPress
            }
            onPress={() => press(2)}
          >
            <Text style={styles.textTab}>Perfil</Text>
          </TouchableHighlight>
        </View>
        {tab==1 ? <TabPets text={text}/>: null}
        {tab==2 ? <TabProfile />: null}
      </View>
    );
}

export default HouseProfile
