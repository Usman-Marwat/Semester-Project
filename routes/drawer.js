import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import appTheme from "../constants/colors";
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
          drawerStyle: {
            backgroundColor: appTheme.PRIMARY_COLOR,
            width: 240,
          },
          drawerActiveTintColor: appTheme.PRIMARY_COLOR,
          drawerActiveBackgroundColor: "white",
          drawerInactiveTintColor: "white",
          drawerLabelStyle: { marginVertical: 10 },
        }}
      >
        <RootDrawer.Screen name="RequestsStack" component={RequestsStack} />
        <RootDrawer.Screen name="ProfileStack" component={ProfileStack} />
        <RootDrawer.Screen name="MyTab" component={MyTab} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
