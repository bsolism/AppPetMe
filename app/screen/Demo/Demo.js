import React, {useState} from 'react'
import {View, Text,TouchableHighlight } from 'react-native'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

export default function Demo() {
const [tab, setTab] = useState(1)

const press=(num)=>{
    setTab(num)
}

    return (
      <View>
        <View
          style={{
            width: "100%",
            height: 180,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <Text style={{ color: "black" }}>Aqui va la imagen</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <TouchableHighlight style={tab==1? {backgroundColor:"red"}: {backgroundColor:"white"}}   onPress={()=> press(1)}>
            <Text>Tab 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={tab==2? {backgroundColor:"red"}: {backgroundColor:"white"}} onPress={()=> press(2)}>
            <Text>Tab 2</Text>
          </TouchableHighlight>
        </View>
        {tab==1? <Tab1/>:null}
        {tab==2? <Tab2/>:null}
      </View>
    );
}
