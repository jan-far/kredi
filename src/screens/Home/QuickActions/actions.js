import React from "react";
import {
  MaterialCommunityIcons as MCIcons,
  FontAwesome5 as FA5,
} from "@expo/vector-icons";

const actions = [
  {
    title: "transfer",
    icon: <MCIcons name="transfer" size={30} color="white" />,
    to: "Transfer",
  },
  {
    title: "top up",
    icon: <MCIcons name="cellphone-text" size={30} color="white" />,
  },
  {
    title: "pay bills",
    icon: <FA5 name="scroll" size={30} color="white" />,
  },
  {
    title: "savings",
    icon: <MCIcons name="safe" size={30} color="white" />,
  },
  {
    title: "loans",
    icon: <FA5 name="hand-holding-usd" size={30} color="white" />,
  },
];

export default actions;
