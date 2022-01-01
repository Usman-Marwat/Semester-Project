import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Projects } from "../screens/Projects";
import { Project } from "../screens/Project";

const Stack = createNativeStackNavigator();

function ProjectsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Projects"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{
          headerStyle: {
            backgroundColor: "steelblue",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Project"
        component={Project}
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
export default ProjectsStack;
