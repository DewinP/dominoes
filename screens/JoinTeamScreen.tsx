import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const JoinTeamScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="h-full items-center justify-center space-y-5 bg-gray-800">
        <View className="flex-row">
          <Text className="text-lg text-white">Join a Team by using the</Text>
          <Text className="ml-1 text-lg text-white bg-red-500">Team Code</Text>
        </View>
        <View className="w-1/2">
          <TextInput
            autoCapitalize="none"
            placeholder="ex. 3cr55g"
            placeholderTextColor="gray"
            className="p-2 border rounded-lg bg-gray-700 text-white text-3xl border-gray-600"
          />
        </View>
        <Pressable className="w-1/3 rounded-md border-red-200  bg-blue-600 ">
          <Text className="p-2 w-full text-white font-medium rounded-md text-xl text-center">
            Join
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-1/3 items-center"
        >
          <Text className="text-gray-500 ml-1 font-bold text-md">Cancel</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JoinTeamScreen;
