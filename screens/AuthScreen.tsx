import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { supabase } from "../utils/supabase";

interface AuthUserSignUp {
  email: string;
  fullName: string;
  userName: string;
  password: string;
}

const AuthScreen = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [userInfo, setUserInfo] = useState<AuthUserSignUp>({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });

  async function signInWithEmail() {
    setIsloading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: userInfo.email,
      password: userInfo.password,
    });
    if (error) Alert.alert(error.message);
    setIsloading(false);
  }

  async function signUpWithEmail() {
    setIsloading(true);

    const { error } = await supabase.auth.signUp({
      email: userInfo.email,
      password: userInfo.password,
      options: {
        data: {
          username: userInfo.userName,
          full_name: userInfo.fullName,
        },
      },
    });

    if (error) Alert.alert(error.message);
    setIsloading(false);
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
                  value={userInfo.email}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, email: text })
                  }
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
                    value={userInfo.fullName}
                    onChangeText={(text) =>
                      setUserInfo({ ...userInfo, fullName: text })
                    }
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
                    value={userInfo.userName}
                    onChangeText={(text) =>
                      setUserInfo({ ...userInfo, userName: text })
                    }
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
                  value={userInfo.password}
                  onChangeText={(text) =>
                    setUserInfo({ ...userInfo, password: text })
                  }
                  secureTextEntry={true}
                  placeholder="*******"
                  placeholderTextColor="gray"
                  className="p-2 border rounded-lg bg-gray-700  placeholder-gray-400 text-white border-gray-600"
                />
              </View>
              <Pressable disabled={isLoading} onPress={handleAuth}>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Text className="p-2 w-full text-white bg-blue-600 font-medium rounded-md text-xl text-center">
                    {isSigningUp ? "SignUp" : "Login"}
                  </Text>
                )}
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
