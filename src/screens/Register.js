import { View } from "native-base";
import React from "react";
import Constants from "expo-constants";
import Stepper from "../components/Stepper";
import AuthWrapper from "../components/AuthWrpper";

const Register = ({ navigation }) => {
  return (
    <View bg="main" flex={1} pt={`${Constants.statusBarHeight + 10}`}>
      <AuthWrapper
        title="Create Account"
        heading="Set Up Your Account"
        mode="register"
        onPress={() => navigation.navigate("Login")}
      >
        <Stepper />
      </AuthWrapper>
    </View>
  );
};

export default Register;
