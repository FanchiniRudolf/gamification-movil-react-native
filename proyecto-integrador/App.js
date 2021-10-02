import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LogInScreen from "./app/screens/LogInScreen";

const Stack = createNativeStackNavigator();

const ThemeOne = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#E6D3A7",
    background: "#E6D3A7",
    border: "#3D262A",
    card: "#3D262A",
    text: "white",
  },
};

function App() {
  return (
    <NavigationContainer theme={ThemeOne}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
