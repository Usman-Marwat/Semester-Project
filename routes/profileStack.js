import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens/Profile";
import Todos from "../screens/Todos";
import appTheme from "../constants/colors";

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.PRIMARY_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
}
export default ProfileStack;
