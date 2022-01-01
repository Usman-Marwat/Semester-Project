import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "./screens/Home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
// import Navigator from "./routes/homeStack";
import Navigator from "./routes/drawer";
import StartNavigator from "./routes/startStack";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [loaded] = useFonts({
    "nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
  });
  const [isLogged, setIsLogged] = useState(false);

  if (!loaded) {
    return null;
  } else {
    if (!isLogged)
      return (
        <PaperProvider>
          <StartNavigator />
        </PaperProvider>
      );
    else {
      return (
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      );
    }
  }
}
