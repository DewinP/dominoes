import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScoreKeeperScreen from "../screens/ScoreKeeperScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreateTeamScreen from "../screens/CreateTeamScreen";
import JoinTeamScreen from "../screens/JoinTeamScreen";
import TeamScreen from "../screens/TeamScreen";
import TeamNavigator from "./TeamNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerBackTitle: "Back",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Score" component={ScoreKeeperScreen} />
      <Tab.Screen name="Team" component={TeamNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
