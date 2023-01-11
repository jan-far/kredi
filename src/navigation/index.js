import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Register from "../screens/Register";
import AuthNav from "./AuthNav";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default Navigation;
