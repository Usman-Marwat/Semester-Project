import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Members from "../screens/Members";

const Stack = createNativeStackNavigator();

function RequestsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Memmbers"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Members"
        component={Members}
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
export default RequestsStack;
