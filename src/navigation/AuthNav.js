import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Transfer from "../screens/Transfer";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  );
};

export default AuthNav;
