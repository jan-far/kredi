import { VStack, Text, Box, HStack, Image, Pressable } from "native-base";
import React from "react";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <VStack space={2}>
      <HStack justifyContent="space-between" alignItems="center" px={4}>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../../../assets/profile.png")}
            w="50px"
            alt="profile image"
            resizeMode="center"
            h="50px"
          />
        </Pressable>
        <Text fontSize={14} fontWeight="black" color="white">
          {title}
        </Text>
        <VStack>
          <Box
            style={{
              transform: [{ rotateZ: "20deg" }],
            }}
          >
            <Box
              w="10px"
              h="10px"
              borderColor="main"
              borderWidth={2}
              borderRadius={50}
              alignItems="center"
              justifyContent="center"
              position="absolute"
              right={1}
              top={0.5}
              zIndex={9999}
              p={-1}
            >
              <Box
                bg="red.500"
                w="6px"
                h="6px"
                borderColor="red.600"
                borderWidth={1}
                borderRadius={50}
              />
            </Box>
            <MCIcons name="bell-outline" size={25} color="white" />
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Header;
