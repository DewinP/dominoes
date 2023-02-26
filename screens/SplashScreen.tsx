import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex h-full w-full justify-center items-center">
      <Text className="text-7xl">Dominoes</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
