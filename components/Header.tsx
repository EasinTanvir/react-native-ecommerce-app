import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="bg-brandColor flex-row justify-between items-center gap-6  h-28 px-2"
      style={{ paddingTop: insets.top }}
    >
      <View className="w-fit">
        <Link href="/(tabs)" className="text-white text-3xl font-bold  italic">
          Shop
        </Link>
      </View>
      <View className="flex-row items-center gap-4">
        <Link href="/login">
          <Ionicons name="heart" color="white" size={26} />
        </Link>
        <Link href="/login">
          <Ionicons name="log-out" color="white" size={26} />
        </Link>
      </View>
    </View>
  );
};

export default Header;
