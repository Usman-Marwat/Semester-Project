import * as React from "react";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Dashboard } from "../screens/Dashboard";
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
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProjectsS"
        component={ProjectsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="project" size={26} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default MyTabs;
