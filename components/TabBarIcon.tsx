import { TabIconProps } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const TabBarIcon = ({ name, iconName, focused, size }: TabIconProps) => {
  return (
    <View className="flex flex-col items-center justify-center  gap-1 min-w-[100px]">
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? "#ffffff" : "#9ca3af"}
      />
      <Text
        className={`text-xs ${
          focused ? "text-white font-bold" : "text-gray-400"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabBarIcon;
