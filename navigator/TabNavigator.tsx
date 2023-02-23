import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "../screens/TeamScreen";
import ScoreKeeperScreen from "../screens/ScoreKeeperScreen";
import { useNavigation } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        headerTitle: "",
      })}
    >
      <Tab.Screen name="Score" component={ScoreKeeperScreen} />
      <Tab.Screen name="Teams" component={TeamScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
