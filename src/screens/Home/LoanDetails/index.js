import {   HStack,  Text, useTheme, VStack } from "native-base";
import React from "react";
import details from "./details";
import Progress from "./Progress";

const LoanDetails = () => {
  const { colors } = useTheme();
  return (
    <VStack bg="panel" py={3} px={4} borderRadius={15} space={2}>
      <Text fontWeight="black">Loan Details</Text>
      <HStack justifyContent="space-between">
        <VStack space={1}>
          <Text fontSize="2xs">Balance</Text>
          <HStack justifyContent="space-between" alignContent="space-between">
            <HStack>
              <Text fontWeight="semibold" fontSize={18}>
                ₦&nbsp;
              </Text>
              <Text lineHeight="33px" fontSize={28} fontWeight="black">
                105,675
              </Text>
              <Text fontWeight="semibold">.00</Text>
            </HStack>
          </HStack>
        </VStack>
        <Progress progress="45%" />
      </HStack>
      <HStack justifyContent="space-between" space={4}>
        {details.map(({ title, info }, i) => (
          <VStack key={title + `-${i}`} justifyContent="space-between">
            <Text
              fontWeight="bold"
              fontSize={8}
              flexWrap="wrap"
              w="80%"
              color={colors.gray[400]}
              mb={1}
            >
              {title}
            </Text>
            {info.map(({ prefix, value, suffix }, i) => (
              <HStack key={value + `-${i}`}>
                {prefix && (
                  <Text fontWeight="semibold" lineHeight={20} fontSize={13}>
                    {prefix}
                  </Text>
                )}
                <Text lineHeight={24} fontSize={16} fontWeight="bold">
                  {value}
                </Text>
                {suffix && (
                  <Text fontSize={11} lineHeight={20} fontWeight="bold">
                    {suffix}
                  </Text>
                )}
              </HStack>
            ))}
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default LoanDetails;
