import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { supabase } from "../utils/supabase";
const AuthScreen = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [userName, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: userName,
          full_name: fullName,
        },
      },
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function handleAuth() {
    if (isSigningUp) {
      signUpWithEmail();
    } else {
      signInWithEmail();
    }
  }

  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <Text className="text-white font-semibold text-2xl mb-6">Dominoes</Text>
        <View className="min-w-full  bg-gray-800 rounded-lg shadow border border-gray-700">
          <View className="p-6 space-y-4">
            <Text className="text-white text-xl font-bold leading-tight tracking-tight ">
              {isSigningUp ? "Register an account" : "Sign in to your account"}
            </Text>
            <View className="space-y-4">
              <View>
                <Text className="block mb-2 text-sm font-medium text-white">
                  Your Email
                </Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
                  placeholder="name@company.com"
                  placeholderTextColor="gray"
                  className="p-2 border rounded-lg bg-gray-700 text-white  border-gray-600"
                />
              </View>
              {isSigningUp && (
                <View>
                  <Text className="block mb-2 text-sm font-medium text-white">
                    Full Name
                  </Text>
                  <TextInput
                    value={fullName}
                    onChangeText={(text) => setFullname(text)}
                    autoCapitalize="none"
                    placeholder="John Doe"
                    placeholderTextColor="gray"
                    className="p-2 border rounded-lg bg-gray-700 text-white  border-gray-600"
                  />
                </View>
              )}
              {isSigningUp && (
                <View>
                  <Text className="block mb-2 text-sm font-medium text-white">
                    Username
                  </Text>
                  <TextInput
                    value={userName}
                    onChangeText={(text) => SetUserName(text)}
                    autoCapitalize="none"
                    placeholder="Domino King"
                    placeholderTextColor="gray"
                    className="p-2 border rounded-lg bg-gray-700 text-white  border-gray-600"
                  />
                </View>
              )}
              <View>
                <Text className="block mb-2 text-sm font-medium text-white">
                  Password
                </Text>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  placeholder="*******"
                  placeholderTextColor="gray"
                  className="p-2 border rounded-lg bg-gray-700  placeholder-gray-400 text-white border-gray-600"
                />
              </View>
              <Pressable onPress={handleAuth}>
                <Text className="p-2 w-full text-white bg-blue-600 font-medium rounded-md text-xl text-center">
                  {isSigningUp ? "SignUp" : "Login"}
                </Text>
              </Pressable>
              <View className="flex flex-row justify-end items-center pt-1">
                <Text className="text-white text-sm font-light">
                  {isSigningUp
                    ? "Already have an account? "
                    : "Don’t have an account yet?"}
                </Text>
                <Pressable onPress={() => setIsSigningUp(!isSigningUp)}>
                  <Text className="text-blue-500 ml-1 font-bold text-md">
                    {isSigningUp ? "Login" : "SignUp"}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
