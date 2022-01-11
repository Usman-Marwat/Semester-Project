import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/drawer";
import StartNavigator from "./routes/startStack";
import { Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLog, useSetIsLog } from "./context/LogContext";

export default function Main() {
  const [loaded] = useFonts({
    "nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
  });

  isLogged = useLog();
  setIsLogged = useSetIsLog();

  const loadDataFromAsync = async () => {
    console.log("Loading-----------------");
    let item = await AsyncStorage.getItem("@user_me");
    var parsed = await JSON.parse(item);
    if (parsed) {
      console.log(`Username: ${parsed.username}`);
      console.log(`Email: ${parsed.email}`);
      setIsLogged(true);
    } else {
      console.log(":nothing");
    }
  };

  useEffect(() => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear();
      } catch (e) {
        // clear error
      }
    };
    // clearAll();
    loadDataFromAsync();
  }, []);

  if (!loaded) {
    return null;
  } else {
    if (!isLogged) return <StartNavigator />;
    else {
      return (
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      );
    }
  }
}
