import React from "react";
import { View, ScrollView } from "react-native";

function SideMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          onPress={() => navigation.navigate("Profile")}
          style={styles.item}
        >
          Page1
        </Text>
        // 'separator' line
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <Text
          onPress={() => navigation.navigate("Profile")}
          style={styles.item}
        >
          Page2
        </Text>
        <Text
          onPress={() => navigation.navigate("Profile")}
          style={styles.item}
        >
          Page3
        </Text>
      </ScrollView>
    </View>
  );
}

export default SideMenu;
