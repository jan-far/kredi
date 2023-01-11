import { Box, Center, Text } from "native-base";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

const Progress = ({ progress }) => {
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(62, 75, 94, ${opacity})`,
    barPercentage: 0.5,
  };

  const data = {
    labels: ["progress"],
    data: [0.4],
    colors: ["rgba(255, 203, 81,1)"],
  };

  return (
    <Box position="relative">
      <ProgressChart
        data={data}
        width={100}
        height={100}
        strokeWidth={6}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
        withCustomBarColorFromData={true}
      />
      <Center position="absolute" h="100%" w="100%">
        <Text fontSize={18} fontWeight="semibold">
          {progress}
        </Text>
      </Center>
    </Box>
  );
};

export default Progress;
