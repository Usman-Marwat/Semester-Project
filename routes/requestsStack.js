import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Members from "../screens/Members";
import appTheme from "../constants/colors";

const Stack = createNativeStackNavigator();

function RequestsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Memmbers"
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.PRIMARY_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Members" component={Members} />
    </Stack.Navigator>
  );
}
export default RequestsStack;
