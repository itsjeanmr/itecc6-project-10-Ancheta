import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View style={{ width: "100%", maxWidth: 400, paddingHorizontal: 20 }}>
        <Text className="text-3xl text-blue-500 font-bold text-center mb-8">
          STUDY NOTES
        </Text>

        <TouchableOpacity className="bg-blue-500 rounded-lg py-3 mb-4">
          <Link href="/scr/Login" asChild>
            <Text className="text-white text-center font-semibold text-lg">
              Login
            </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity className="bg-green-500 rounded-lg py-3 mb-4">
          <Link href="/scr/Signup" asChild>
            <Text className="text-white text-center font-semibold text-lg">
              Sign Up
            </Text>
          </Link>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Index;
