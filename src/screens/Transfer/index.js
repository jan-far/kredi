import {
  Box,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
  Button,
} from "native-base";
import React, { useState } from "react";
import Constants from "expo-constants";
import Header from "../../components/Header.js";
import CardsView from "../../components/CardsView";
import {
  Octicons,
  MaterialCommunityIcons as MCIcons,
  AntDesign,
} from "@expo/vector-icons";
import transferTypes from "./types.js";

const Transfer = () => {
  const [selected, setSelected] = useState(2);
  const { colors } = useTheme();

  return (
    <ScrollView
      bg="main"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight + 20,
      }}
      flex={1}
    >
      <Header title="Transfer" />
      <VStack mt={6}>
        <Text mb={-2} ml={4} bold fontSize={12}>
          Choose Account
        </Text>
        <CardsView />
      </VStack>
      <VStack
        bg="#f7f5ff"
        space={9}
        pt={6}
        mt={4}
        borderTopRadius={15}
        px={5}
        pb={8}
      >
        <HStack
          bg="#ebebf5"
          space={4}
          alignItems="center"
          px={5}
          py={4}
          borderRadius={15}
          position="relative"
        >
          <Box>
            <Octicons name="credit-card" size={50} color={colors.gray[400]} />
          </Box>
          <VStack space={2}>
            <Text color="black" fontWeight="semibold" fontSize={10}>
              Want to get a debit card?
            </Text>
            <Text color="red.600" bold underline>
              REQUEST A DEBIT CARD
            </Text>
          </VStack>
          <Box position="absolute" top={2} right={3}>
            <MCIcons name="close" color="red" size={14} />
          </Box>
        </HStack>
        <VStack bg="#f7f5ff">
          <Text color="black" bold>
            Choose Transfer Type
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingVertical: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <HStack space={4}>
              {transferTypes.map(({ name }, i) => {
                const chosen = selected === i;
                return (
                  <Pressable key={i.toString()} onPress={() => setSelected(i)}>
                    <Box
                      key={1}
                      p={3}
                      bg={chosen ? "#28374c" : "#faf9ff"}
                      borderColor="#e6e5ea"
                      borderWidth={1}
                      borderRadius={15}
                      w="140px"
                      h="105px"
                    >
                      <VStack justifyContent="space-between" flex={1}>
                        <Box>
                          <AntDesign
                            name="retweet"
                            size={28}
                            color={chosen ? "yellow" : "black"}
                          />
                        </Box>
                        <Text
                          color={chosen ? "white" : "black"}
                          bold
                          fontSize={12}
                        >
                          {name}
                        </Text>
                      </VStack>
                    </Box>
                  </Pressable>
                );
              })}
            </HStack>
          </ScrollView>
        </VStack>
      </VStack>
      <VStack bg="white" space={4} pt={3} flex={1} pb={8}>
        <Text bold fontSize={18} ml={4} color="black">
          Recipient's Details
        </Text>
        <VStack space={4}>
          <VStack space={1} px={4}>
            <Text color="gray.400">Amount</Text>
            <Box shadow={2}>
              <Input
                h={10}
                leftElement={
                  <Text pl={2} color="black">
                    ₦
                  </Text>
                }
              />
            </Box>
          </VStack>
          <VStack space={1} px={4}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="gray.400">Account Number</Text>
              <Text color="red.600" fontSize={12}>
                Find Beneficiary
              </Text>
            </HStack>
            <Box shadow={2}>
              <Input h={10} />
            </Box>
          </VStack>
          <VStack space={1} px={4}>
            <Text color="black">Bank Account</Text>
            <Box shadow={2}>
              <Input
                h={10}
                rightElement={
                  <Box px={2}>
                    <MCIcons
                      name="chevron-down"
                      size={25}
                      color={colors.gray[500]}
                    />
                  </Box>
                }
              />
            </Box>
          </VStack>
          <VStack space={1} px={4}>
            <Text color="black">Narration (Optiional)</Text>
            <Box shadow={2}>
              <Input h={10} />
            </Box>
          </VStack>
        </VStack>
        <Box px={4} mt={4}>
          <Button h={12} borderRadius={12} bg="#f15c44">
            Next
          </Button>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default Transfer;
