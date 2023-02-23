import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../utils/supabase";
import AuthScreen from "../screens/AuthScreen";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
};

interface Temp {
  full_name: string;
  username: string;
}

const RootNavigator = () => {
  const [user, setUser] = useState<Temp | undefined>();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        let { data } = await supabase.auth.getUser();
        console.log(data.user?.user_metadata);
        setUser(data.user?.user_metadata as Temp);
      }
    });
  }, []);

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        {user ? (
          <RootStack.Screen name="Main" component={TabNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthScreen} />
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
