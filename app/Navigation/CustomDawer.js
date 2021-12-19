import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppText from "../components/AppTex";
import colors from "../config/colors";
import server from "../service/server";
import routes from "../navigation/routes";
import { Drawer } from "react-native-paper";
import TitleSeparator from "../components/SeparadorTitle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CustomDrawer(props) {
  const { navigation, user, logOut } = props;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => navigation.navigate(routes.PROFILE)}>
          <View style={styles.containerDrawer}>
            <Image
              source={{
                uri: server.URI + "/UserImageProfile/" + user.image,
              }}
              style={styles.image}
            />
            <View>
              <AppText style={styles.nameText}>{user.name}</AppText>
              <AppText style={styles.emailText}>{user.email}</AppText>
            </View>
          </View>
        </TouchableOpacity>
        <Drawer.Section>
          <TitleSeparator
            title="General"
            styleText={{
              fontSize: 12,
              color: colors.blue,
              fontWeight: "bold",
            }}
            styleView={{
              backgroundColor: colors.light,
              marginVertical: 5,
            }}
          />
        </Drawer.Section>

        <DrawerItemList {...props} />
        {user.rol != "2" ? (
          <Drawer.Section>
            <TitleSeparator
              title="Registrar"
              styleText={{
                fontSize: 12,
                color: colors.blue,
                fontWeight: "bold",
              }}
              styleView={{
                marginTop: 30,
                backgroundColor: colors.light,
                marginVertical: 15,
              }}
            />
            <DrawerItem
              label="Registrar Refugio"
              icon={() => (
                <MaterialCommunityIcons
                  name="location-enter"
                  size={24}
                  color="black"
                />
              )}
              onPress={() => navigation.navigate(routes.REGISTER_HOUSE)}
            />
          </Drawer.Section>
        ) : null}

        {user.rol != "3" ? (
          <Drawer.Section>
            <TitleSeparator
              title="Administrador"
              styleText={{
                fontSize: 12,
                color: colors.blue,
                fontWeight: "bold",
              }}
              styleView={{
                marginTop: 50,
                backgroundColor: colors.light,
                marginVertical: 15,
              }}
            />
            <DrawerItem
              label="Refugio"
              icon={() => (
                <MaterialCommunityIcons
                  name="home-heart"
                  size={24}
                  color="black"
                />
              )}
              onPress={() => navigation.navigate(routes.LISTINGREFUGE)}
            />
          </Drawer.Section>
        ) : null}
        <Drawer.Section>
          <TitleSeparator
            title="Soporte"
            styleText={{
              fontSize: 12,
              color: colors.blue,
              fontWeight: "bold",
            }}
            styleView={{
              marginTop: 50,
              backgroundColor: colors.light,
              marginVertical: 15,
            }}
          />
          <DrawerItem
            label="Contacto"
            icon={() => (
              <MaterialCommunityIcons name="whatsapp" size={24} color="black" />
            )}
            onPress={() => Linking.openURL("https://wa.me/+50494532392")}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <View>
        <AppText style={styles.textV}>Version 1.0</AppText>
      </View>

      <TouchableOpacity style={styles.Touchable} onPress={() => logOut()}>
        <AppText icon="logout" style={styles.text}>
          Cerrar Sesion
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDrawer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.light_grey,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
  },
  nameText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  emailText: {
    fontSize: 12,
    marginLeft: 10,
  },
  Touchable: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: colors.light_grey,
    padding: 20,
  },
  text: {
    fontSize: 14,
  },
  textV: {
    fontSize: 11,
    color: colors.dark_grey,
  },
});

export default CustomDrawer;
