import React from "react";
import { Text, View } from "react-native";

const EmptyProduct = () => {
  return (
    <View className="flex-1 items-center justify-center mt-20 px-6">
      <Text className="text-5xl mb-4">🛒</Text>
      <Text className="text-gray-600 text-xl font-semibold">
        No products found
      </Text>
      <Text className="text-gray-400 text-base mt-1 text-center">
        Try searching with a different keyword.
      </Text>
    </View>
  );
};

export default EmptyProduct;
