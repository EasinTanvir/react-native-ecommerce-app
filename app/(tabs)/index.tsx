import Header from "@/components/Header";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <Text>Hello</Text>
    </View>
  );
};

export default HomePage;
