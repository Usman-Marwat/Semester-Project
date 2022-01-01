import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import HomeStack from "./homeStack24";
import AboutStack from "./aboutStack";
import AppStack from "./Stack";
import RequestsStack from "./requestsStack";
import ProfileStack from "./profileStack";
import MyTab from "./tab";

const RootDrawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator
        initialRouteName="ProfileStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootDrawer.Screen name="Home-Stack" component={HomeStack} />
        <RootDrawer.Screen name="About-Stack" component={AboutStack} />
        <RootDrawer.Screen name="RequestsStack" component={RequestsStack} />
        <RootDrawer.Screen name="ProfileStack" component={ProfileStack} />
        <RootDrawer.Screen name="App-Stack" component={AppStack} />
        <RootDrawer.Screen name="MyTab" component={MyTab} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
