import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Profile } from "../screens/Profile";
import { Dashboard } from "../screens/Dashboard";
import { Projects } from "../screens/Projects";
import ProjectsStack from "../routes/projectsStack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import appTheme from "../constants/colors";

const BottomTab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator
      activeColor="white"
      inactiveColor="black"
      barStyle={{ backgroundColor: appTheme.PRIMARY_COLOR }}
      screenOptions={{
        tabBarStyle: { position: "absolute" },
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProjectsS"
        component={ProjectsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default MyTabs;
