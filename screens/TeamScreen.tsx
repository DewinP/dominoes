"use client";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TeamStackParamList } from "../navigator/TeamNavigator";

const TeamScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TeamStackParamList>>();
  return (
    <SafeAreaView>
      <View className="flex flex-col min-h-full px-6 bg-gray-900">
        <View className="w-full space-y-5 px-5 h-full justify-center">
          <Pressable onPress={() => navigation.navigate("Join")}>
            <Text className="p-2 w-full text-white  bg-blue-600 font-medium text-xl text-center">
              Join Team
            </Text>
          </Pressable>
          <Pressable>
            <Text className="p-2 w-full text-white  bg-gray-400 font-medium text-xl text-center">
              Create Team
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TeamScreen;
