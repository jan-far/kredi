import React from "react";
import { HStack, Text, VStack, Box, useTheme } from "native-base";
import Constants from "expo-constants";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";
import Header from "../../components/Header.js";
import ProfilePicture from "./ProfilePicture.js";
import info from "./info.js";
import BoxWithStar from "../../components/BoxWithStar";

const Profile = () => {
  const { colors } = useTheme();
  return (
    <VStack pt={Constants.statusBarHeight} flex={1} bg="main" space={4}>
      <VStack>
        <Header title="Profile" />
        <ProfilePicture />
      </VStack>
      <VStack borderTopRadius={25} bg="grayBg" flex={1} pt={4} px={6}>
        <VStack space={2}>
          {info.map((val, i) => (
            <HStack
              key={i.toString()}
              alignItems="center"
              bg="white"
              w="100%"
              height="60px"
              position="relative"
              borderRadius={10}
              pl={4}
            >
              <BoxWithStar />
              <Text color="black" fontSize={12} bold>
                {val.title}
              </Text>
              <Box position="absolute" right={2}>
                <MCIcons
                  name="chevron-right"
                  size={24}
                  color={colors.gray[600]}
                />
              </Box>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Profile;
