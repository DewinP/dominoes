import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeamScreen from "../screens/TeamScreen";
import JoinTeamScreen from "../screens/JoinTeamScreen";
import CreateTeamScreen from "../screens/CreateTeamScreen";

const TeamStack = createNativeStackNavigator();

export type TeamStackParamList = {
  Team: undefined;
  Join: undefined;
  Create: undefined;
};

const TeamNavigator = () => {
  return (
    <TeamStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <TeamStack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#454565",
          },
          headerTintColor: "#fff",
          headerBackTitle: "Back",
        }}
      >
        <TeamStack.Screen name="Teams" component={TeamScreen} />
        <TeamStack.Screen
          name="Join"
          options={{ presentation: "modal" }}
          component={JoinTeamScreen}
        />
        <TeamStack.Screen
          options={{ presentation: "modal" }}
          name="Create"
          component={CreateTeamScreen}
        />
      </TeamStack.Group>
    </TeamStack.Navigator>
  );
};

export default TeamNavigator;
