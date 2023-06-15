import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/Pages/Main";

import Login from "./src/Pages/Login";
import AboutUs from "./src/Pages/AboutUs";
import SignUp from "./src/Pages/SignUp";
import LoginWithMail from "./src/Pages/LoginWithMail";
import CatEvents from "./src/Pages/CatEvents";
import AboutEvent from "./src/Pages/AboutEvent";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AboutEvent" component={AboutEvent} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Reg" component={SignUp} />
        <Stack.Screen name="LoginWithMail" component={LoginWithMail} />
        <Stack.Screen name="CatEvents" component={CatEvents} />
        
              

      </Stack.Navigator>
    </NavigationContainer>
  );
}
