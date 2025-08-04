import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type CategoryItemProps = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

const CategoryItem = ({ id, name, image }: CategoryItemProps) => {
  return (
    <View className="w-20 items-center">
      <View className="w-16 h-16 rounded-full shadow-md overflow-hidden bg-white">
        <Image source={image} className="w-full h-full" resizeMode="cover" />
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
