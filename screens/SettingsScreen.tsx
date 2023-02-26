import { View, Text, Pressable } from "react-native";
import React from "react";
import { supabase } from "../utils/supabase";

const SettingsScreen = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <View>
      <Pressable onPress={handleLogout} className="w-full bg-red-500 p-10">
        <Text> LOGOUT</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
