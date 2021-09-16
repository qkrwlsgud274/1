import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        BottomStyle: {
          backgroundColor: "white",
          borderBottomColor: "white",
          shadowColor: "white",
          height: 50,
        },
        BottomTitleAlign: "center",
        BottomTintColor: "#000",
        BottomBackTitleVisible: false,
      }}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="AboutPage" component={AboutPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
