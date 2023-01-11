import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Constants from "expo-constants";
import AuthWrapper from "../components/AuthWrpper";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View bg="main" flex={1} pt={`${Constants.statusBarHeight + 10}`}>
      <AuthWrapper
        title="Login to Account"
        heading="Welcome back!"
        subheading="Login with your Kredi Bank details"
        mode="Login"
        onPress={() => navigation.navigate("Home")}
      >
        <VStack px={4} pt={6}>
          <VStack space={1}>
            <Text fontWeight="semibold" color="gray.500">
              Enter Phone Number
            </Text>
            <Box shadow={2}>
              <Input
                height={55}
                borderRadius={8}
                elevation={8}
                style={{ shadowOffset: { width: 0, height: 0 } }}
              />
            </Box>
          </VStack>
          <VStack space={1} mt={6}>
            <Text fontWeight="semibold" color="gray.500">
              Enter Phone Password
            </Text>
            <Box shadow={2}>
              <Input
                height={55}
                borderRadius={8}
                rightElement={
                  <Box px={2}>
                    <MCIcons name="eye" size={20} color="grey" />
                  </Box>
                }
              />
            </Box>
            <Box alignSelf="flex-end">
              <Pressable>
                <Text fontSize={12} bold color="#f15c44">
                  Forgot Password?
                </Text>
              </Pressable>
            </Box>
          </VStack>
          <Box>
            <Button
              height={50}
              borderRadius={8}
              mt={8}
              bg="orange.600"
              _text={{ fontSize: 16, fontWeight: "bold" }}
            >
              Log in
            </Button>
          </Box>
          <Box mt={6}>
            <Pressable>
              <Center>
                <Image
                  source={require("../../assets/fingerprint.png")}
                  w="90px"
                  h="90px"
                  alt="fingerprint"
                />
              </Center>
            </Pressable>
          </Box>
        </VStack>
      </AuthWrapper>
    </View>
  );
};

export default Login;
