import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { navigationRef } from "./app/navigation/rootNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import Profile from "./app/screen/Profile";
import PicketImagen from "./app/components/PicketImagen";
import DemoCamera from "./app/components/DemoCamera";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error de restore")}
      />
    );

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer ref={navigationRef}>
          {/*<Profile />*/}
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
