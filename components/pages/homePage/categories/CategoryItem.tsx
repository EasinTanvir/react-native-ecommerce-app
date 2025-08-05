import { Category } from "@/utils/types";
import React from "react";
import { Image, Text, View } from "react-native";

const CategoryItem = ({ id, name, image }: Category) => {
  return (
    <View className="w-20 items-center">
      <View className="w-16 h-16 rounded-full shadow-md overflow-hidden bg-white">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <Text
        className="mt-2 text-xs font-medium text-center text-gray-700"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  );
};

export default CategoryItem;
