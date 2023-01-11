import { Box, useTheme } from "native-base";
import React from "react";
import { MaterialCommunityIcons as MCIcons } from "@expo/vector-icons";

const BoxWithStar = () => {
  const { colors } = useTheme();
  return (
    <Box
      borderColor="gray.400"
      w="30px"
      h="30px"
      borderWidth="2.4"
      borderRadius={8}
      mr={4}
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box position="absolute" bg="transparent" right={-7.5} top={0.5}>
        <MCIcons name="chevron-down" color={colors.gray[400]} size={13} />
      </Box>
      <Box h="5px" w="10px" bg="white" position="absolute" right="-5" />
      <MCIcons name="asterisk" color={colors.gray[400]} size={8} />
    </Box>
  );
};

export default BoxWithStar;
