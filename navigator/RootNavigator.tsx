import React, { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { supabase } from "../utils/supabase";
import AuthScreen from "../screens/AuthScreen";
import SplashScreen from "../screens/SplashScreen";

const RootStack = createNativeStackNavigator();

interface Temp {
  full_name: string;
  username: string;
}

const RootNavigator = () => {
  const [user, setUser] = useState<Temp | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const doAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user.user_metadata as Temp);
      }
      if (event === "SIGNED_OUT") {
        setUser(undefined);
      }
    });

    doAuth().finally(() => setIsLoading(false));
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerBackTitle: "Back",
        headerBackVisible: true,
      })}
    >
      <RootStack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#454565",
          },
          headerTintColor: "#fff",
          headerBackTitle: "Back",
        }}
      >
        {isLoading && (
          <RootStack.Screen name="Loading" component={SplashScreen} />
        )}
        {user ? (
          <RootStack.Screen
            options={{
              animation: "fade",
            }}
            name="Main"
            component={TabNavigator}
          />
        ) : (
          <RootStack.Screen name="Auth" component={AuthScreen} />
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
