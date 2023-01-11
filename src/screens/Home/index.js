import { HStack, ScrollView, Text, View } from "native-base";
import React from "react";
import Constants from "expo-constants";
import Header from "../../components/Header.js";
import CardsView from "../../components/CardsView";
import LoanDetails from "./LoanDetails";
import QuickActions from "./QuickActions/index.js";

const Home = () => {
  return (
    <ScrollView
      bg="main"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: Constants.statusBarHeight,
      }}
      flex={1}
      stickyHeaderIndices={[4]}
    >
      <Header title="kredi" />
      <HStack px={4} mt={6}>
        <Text fontSize={16}>Welcome, </Text>
        <Text fontWeight="black" fontSize={16}>
          Oluwaseun
        </Text>
      </HStack>
      <CardsView />
      <View my={6}>
        <LoanDetails />
      </View>
      <QuickActions />
    </ScrollView>
  );
};

export default Home;
