import React from 'react'
import {View, Text} from 'react-native'

function TabPets(props) {
    const {text}= props
    return (
        <View>
            <Text>Lista de mascotas</Text>
            <Text>{text}</Text>
        </View>
    )
}

export default TabPets
