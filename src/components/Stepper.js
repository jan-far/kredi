import { HStack, View, Center, Box, VStack, Text } from "native-base";
import React from "react";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stepper = () => {
  return (
    <>
      {[1, 2, 3, 4].map((num) => (
        <HStack
          w="100%"
          alignItems="center"
          space={3}
          pr={2}
          key={num.toString()}
        >
          <View w="10%" position="relative">
            <Center>
              <View w={0.5} h="90px" bg="#939ba5" />
              <View
                borderRadius={50}
                borderColor="#939ba5"
                borderWidth={2}
                h="16px"
                w="16px"
                position="absolute"
                bg="white"
              />
            </Center>
          </View>

          <HStack
            bg="white"
            w="90%"
            alignItems="center"
            px={4}
            py={3}
            borderRadius={8}
            space={3}
            position="relative"
          >
            <Box bg="#ffeeec" p={2} borderRadius={8}>
              <MCIcons name="phone" color="#f15c44" size={30} />
            </Box>
            <VStack>
              <Text fontWeight="bold" fontSize={16}>
                Phone Verification
              </Text>
              <Text color="gray.500">Enter & Verofy your number</Text>
            </VStack>
            <Box position="absolute" right="2">
              <MCIcons name="chevron-right" size={22} color="black" />
            </Box>
          </HStack>
        </HStack>
      ))}
    </>
  );
};

export default Stepper;
