import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import HomeStack from "./homeStack24";
import AboutStack from "./aboutStack";
import AppStack from "./Stack";

const RootDrawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator
        initialRouteName="Home-Stack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootDrawer.Screen name="Home-Stack" component={HomeStack} />
        <RootDrawer.Screen name="About-Stack" component={AboutStack} />
        <RootDrawer.Screen name="App-Stack" component={AppStack} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
