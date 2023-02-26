import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Table from "../components/Table";
import { Score } from "../common/intefaces";

const ScoreKeeperScreen = () => {
  const [teamOneScore, setTeamOneScore] = useState<number>(0);
  const [teamTwoScore, setTeamTwoScore] = useState<number>(0);
  const [rounds, setRounds] = useState<Score[]>([]);
  const handleAddRounds = () => {
    const newRoundScore: Score = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
    };
    if (teamOneScore === 0 && teamTwoScore === 0) {
      Alert.alert("Can't add an empty round.");
      return;
    }
    setRounds([...rounds, newRoundScore]);
    setTeamOneScore(0);
    setTeamTwoScore(0);
  };

  const handleReset = () => {
    setRounds([]);
    setTeamOneScore(0);
    setTeamTwoScore(0);
  };
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex flex-col min-h-full  px-6 pt-3 bg-gray-900 space-y-3 ">
          <View className="flex flex-row w-full justify-between space-x-5">
            <View className=" items-center flex-1">
              <Text className="block mb-2 text-2xl font-medium text-orange-400">
                Them
              </Text>
              <TextInput
                autoCapitalize="none"
                value={teamOneScore.toString().replace(/^0+/, "")}
                onChangeText={(num) => setTeamOneScore(Number(num))}
                placeholder="0"
                maxLength={3}
                keyboardType="numeric"
                placeholderTextColor="gray"
                className="p-4 flex-grow text-lg border rounded-lg n bg-gray-700 text-white w-full border-gray-600"
              />
            </View>
            <View className="items-center flex-1">
              <Text className="block mb-2 text-2xl font-medium text-green-400">
                Us
              </Text>
              <TextInput
                value={teamTwoScore.toString().replace(/^0+/, "")}
                onChangeText={(num) => {
                  setTeamTwoScore(Number(num));
                }}
                maxLength={3}
                placeholder="0"
                placeholderTextColor="gray"
                keyboardType="numeric"
                className="p-4 flex-grow items-center text-lg leading-0   border rounded-lg bg-gray-700 text-white w-full border-gray-600"
              />
            </View>
          </View>
          <Pressable onPress={handleAddRounds}>
            <Text className="p-2 w-full text-white  bg-blue-600 font-medium text-xl text-center">
              Add Round
            </Text>
          </Pressable>
          <Table setScores={setRounds} scores={rounds} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ScoreKeeperScreen;
