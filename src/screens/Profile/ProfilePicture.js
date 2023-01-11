import { VStack, HStack, Box, Center, Text } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";

const ProfilePicture = () => {
  return (
    <VStack mt={5} space={3}>
      <HStack alignItems="center">
        <Box
          w="100px"
          h="100px"
          bg="gray.600"
          borderRadius={50}
          mr={5}
          ml={5}
          position="relative"
        >
          <ImageBackground
            source={require("../../../assets/profile.png")}
            style={{ width: "100%", height: "100%", position: "absolute" }}
            resizeMode="cover"
          />

          <Center flex={1} position="absolute" top={10} right={9} zIndex={9999}>
            <MCIcons name="camera" size={28} color="white" />
          </Center>

          <Box w="100px" h="100px" bg="main" opacity={0.5} borderRadius={50} />
        </Box>
        <VStack justifyContent="center">
          <Text fontWeight="black" fontSize={23} color="white">
            Oluwaseun Ismail
          </Text>
          <Text color="white" fontSize={12}>
            Last Login: 12. 01. 2021 at 08:00<Text fontSize={8}>AM</Text>
          </Text>
        </VStack>
      </HStack>
      <Box mx={6}>
        <Text
          ml={2}
          alignSelf="flex-start"
          color="gray.300"
          fontWeight="semibold"
        >
          Edit picture
        </Text>
      </Box>
    </VStack>
  );
};

export default ProfilePicture;
