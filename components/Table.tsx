import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Score } from "../common/intefaces";

interface TableProps {
  scores: Score[];
  setScores: Dispatch<SetStateAction<Score[]>>;
}

const Table = ({ scores, setScores }: TableProps) => {
  let teamOneScore = scores?.reduce((acc, round) => {
    return acc + round.teamOne;
  }, 0);
  let teamTwoScore = scores?.reduce((acc, round) => {
    return acc + round.teamTwo;
  }, 0);

  const handleDelete = (idx: number): void => {
    Alert.alert("Delete round # " + (1 + Number(idx)) + "?", "Confirm?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          const newScores = scores.filter((_, i) => i !== idx);
          setScores(newScores);
        },
      },
    ]);
  };

  return (
    <View className="bg-gray-700  items-center mt-3">
      <View className="flex self-stretch flex-row py-4 bg-gray-800 border-0 border-b border-gray-700">
        <View className="flex-1 self-stretch">
          <Text className="text-center text-lg font-bold text-white">
            Total
          </Text>
        </View>
        <Text className="flex-1 self-stretch text-center text-2xl font-bold text-orange-400 ">
          {teamOneScore ?? 0}
        </Text>
        <Text className="flex-1 self-stretch text-center text-2xl font-bold text-green-400 ">
          {teamTwoScore ?? 0}
        </Text>
        <Text className="flex-1 self-stretch text-center text-lg font-bold text-white w-10"></Text>
      </View>
      {scores
        ?.map((s, idx) => {
          return (
            <View
              key={idx}
              className="flex self-stretch flex-row  border-solid border-0 border-b border-gray-800"
            >
              <Text className="flex-1 self-stretch text-center text-lg font-bold text-white bg-gray-800 py-2">{`Rnd ${
                idx + 1
              }`}</Text>
              <Text className="flex-1 self-stretch text-center text-lg font-bold text-white py-2">
                {s.teamOne}
              </Text>
              <Text className="flex-1 self-stretch text-center text-lg font-bold text-white py-2">
                {s.teamTwo}
              </Text>
              <Pressable
                onPress={() => handleDelete(idx)}
                className="flex-1 self-stretch"
              >
                <Text className="text-center text-lg font-bold text-red-400 py-2">
                  delete
                </Text>
              </Pressable>
            </View>
          );
        })
        .reverse()}
    </View>
  );
};

export default Table;
