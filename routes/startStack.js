import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "../screens/Onboarding";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import ReviewDetails from "../screens/ReviewDetails";
const Stack = createNativeStackNavigator();
function StartNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: "Onboarding",
            headerStyle: {
              backgroundColor: "steelblue",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StartNavigator;
