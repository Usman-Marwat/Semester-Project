import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      activeColor="#f0edf6"
      inactiveColor="black"
      barStyle={{ backgroundColor: appTheme.PRIMARY_COLOR }}
    >
      <BottomTab.Screen name="Dashboard" component={Dashboard} options={{}} />
      <BottomTab.Screen name="ProjectsS" component={ProjectsStack} />
    </BottomTab.Navigator>
  );
}
export default MyTabs;
