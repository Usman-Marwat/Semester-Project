import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens/Profile";
import Todos from "../screens/Todos";

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: "steelblue",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Todos"
        component={Todos}
        options={{
          headerStyle: {
            backgroundColor: "steelblue",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
export default ProfileStack;
