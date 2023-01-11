import {
  VStack,
  Box,
  HStack,
  ScrollView,
  Text,
  Center,
  Pressable,
} from "native-base";
import React from "react";
import BackButton from "../BackButton";

const AuthWrapper = ({
  mode,
  title,
  heading,
  subheading = "",
  children,
  onPress,
}) => {
  return (
    <VStack pt={3} space={3} bg="main" flex={1}>
      <Box>
        <BackButton />
        <Text color="white" fontWeight="black" fontSize={23} mt={5} ml={4}>
          {title}
        </Text>
      </Box>
      <VStack
        borderTopRadius={28}
        mt={2}
        pt={10}
        bg="#faf9ff"
        flex={1}
        height="100%"
        position="relative"
      >
        <VStack pl={1} mr={4} space={3} flex={1}>
          <VStack space={1}>
            <Text color="main" pl={3} fontWeight="black" fontSize={22}>
              {heading}
            </Text>
            {!!subheading && (
              <Text bold pl={3.5} color="gray.500" fontSize={12}>
                {subheading}
              </Text>
            )}
          </VStack>
          <ScrollView flex={1}>{children}</ScrollView>
        </VStack>
        <Center position="absolute" bottom="10" right="50" left="50" flex={1}>
          {mode === "register" ? (
            <>
              <Text color="main">Already have an account?</Text>
              <Pressable onPress={onPress}>
                <Text bold color="#f15c44">
                  Login here
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <HStack space={1}>
                <Text color="main" fontSize={12}>
                  Have no account yet?
                </Text>
                <Pressable onPress={onPress}>
                  <Text bold fontSize={12} color="#f15c44" underline>
                    Create
                  </Text>
                </Pressable>
              </HStack>
            </>
          )}
        </Center>
      </VStack>
    </VStack>
  );
};

export default AuthWrapper;
