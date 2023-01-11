import React from "react";
import { HStack, VStack, Box, Text, ScrollView, Center } from "native-base";
import { Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import trnxs from "./tnxData";
import actions from "./actions";

const height = Dimensions.get("window").height;

const QuickActions = () => {
  const navigation = useNavigation();

  return (
    <VStack bg="panel" borderTopRadius={15} py={3}>
      <Box px={4} mb={6}>
        <Text fontWeight="black">Quick Actions</Text>
        <HStack justifyContent="space-between" mt={4}>
          {actions.map(({ title, icon, to }, i) => (
            <Pressable
              key={title + `-${i}`}
              onPress={() => to && navigation.navigate(to)}
            >
              <VStack>
                <Box bg="darkPanel" w="60px" h="60px" borderRadius={10}>
                  <Center flex={1}>{icon}</Center>
                </Box>
                <Text
                  textAlign="center"
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight="semibold"
                  mt={1}
                >
                  {title}
                </Text>
              </VStack>
            </Pressable>
          ))}
        </HStack>
      </Box>
      <Box px={5} py={4} bg="white" borderTopRadius={15}>
        <VStack>
          <HStack alignItems="center" justifyContent="space-between" pb={6}>
            <Text color="black" fontWeight="bold">
              Recent Transactions
            </Text>
            <Pressable>
              <Text bold fontSize={12} color="red.400">
                View All
              </Text>
            </Pressable>
          </HStack>
          <ScrollView
            nestedScrollEnabled
            h={height * 0.85}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: height * 0.2,
              marginBottom: 40,
            }}
          >
            <VStack space={6} pt={4}>
              {trnxs.map(({ summary, negative, value, date }, index) => {
                return (
                  <HStack
                    key={index.toString()}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <VStack space={1}>
                      <Text color="black" fontWeight="bold" fontSize={16}>
                        {summary}
                      </Text>
                      <Text color="gray.400" fontSize={12} fontWeight="bold">
                        {date}
                      </Text>
                    </VStack>
                    <Text
                      textAlign="right"
                      color={negative ? "red.600" : "green.600"}
                      bold
                      fontSize={12}
                    >
                      {negative && "- "}₦{value}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </ScrollView>
        </VStack>
      </Box>
    </VStack>
  );
};

export default QuickActions;
