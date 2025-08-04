import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-rose-700" style={{ paddingTop: insets.top }}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
