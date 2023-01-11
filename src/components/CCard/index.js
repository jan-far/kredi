import React from "react";
import { BlurView } from "expo-blur";
import { View, Text, HStack, VStack, useTheme } from "native-base";
import {
  MaterialCommunityIcons as MCIcons,
  FontAwesome as FA,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const CCard = ({ cardType }) => {
  const { colors } = useTheme();

  return (
    <BlurView tint="light" style={styles.blurContainer}>
      <View
        h={200}
        w={320}
        borderRadius={10}
        borderColor="white"
        borderWidth={1}
      >
        <VStack p={4} flex={1} justifyContent="space-between">
          <HStack justifyContent="space-between">
            <HStack>
              <VStack>
                <Text bold fontSize={9}>
                  KrediBank Balance
                </Text>
                <HStack
                  justifyContent="space-between"
                  alignContent="space-between"
                >
                  <HStack>
                    <Text fontWeight="semibold" fontSize={18}>
                      ₦&nbsp;
                    </Text>
                    <Text lineHeight="33px" fontSize={28} fontWeight="black">
                      45,675
                    </Text>
                    <Text fontWeight="semibold">.00</Text>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>
            <View style={styles.wifi}>
              <MCIcons name="wifi" color="white" size={26} />
            </View>
          </HStack>
          <HStack space={6}>
            <Text fontWeight="semibold" fontSize={18}>
              ****
            </Text>
            <Text fontWeight="semibold" fontSize={18}>
              ****
            </Text>
            <Text fontWeight="semibold" fontSize={18}>
              ****
            </Text>
            <Text fontWeight="semibold" fontSize={18}>
              8501
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <VStack>
              <Text fontSize="2xs" fontWeight="semibold">
                Expiry Date
              </Text>
              <Text fontWeight="semibold">04/23</Text>
            </VStack>
            <View>
              <FA name={cardType} size={28} color={colors.gray[100]} />
            </View>
          </HStack>
        </VStack>
      </View>
    </BlurView>
  );
};

export default CCard;

const styles = StyleSheet.create({
  blurContainer: {
    backgroundColor: "transparent",
    borderRadius: 40,
    borderColor: "transparent",
    borderWidth: 1,
    padding: 20,
    width: 320,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  wifi: {
    transform: [{ rotate: "90deg" }, { translateY: 8 }],
  },
});
