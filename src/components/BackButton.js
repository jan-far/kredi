import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Box ml={2}>
      <TouchableOpacity
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
      >
        <Ionicon name="chevron-back" color="white" size={32} />
      </TouchableOpacity>
    </Box>
  );
};

export default BackButton;
