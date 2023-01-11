import { ScrollView, HStack, VStack } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import CCard from "./CCard";

const CardsView = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pl={4}
      pr={10}
      mt={6}
      py={1}
      contentContainerStyle={styles.scrollX}
    >
      <VStack>
        <HStack space={4}>
          {[1, 2].map((i) => (
            <CCard key={i} cardType={i === 1 ? "cc-visa" : "cc-mastercard"} />
          ))}
        </HStack>
        <HStack space={3}></HStack>
      </VStack>
    </ScrollView>
  );
};

export default CardsView;

const styles = StyleSheet.create({
  scrollX: {
    paddingRight: 45,
  },
});
