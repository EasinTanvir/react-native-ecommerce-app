import { Product } from "@/utils/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({
  title,
  description,
  price,
  image,
  id,
  categoryId,
}: Product) => {
  return (
    <Link
      className="w-1/2 "
      href={{ pathname: "/product/[pId]", params: { pId: id } }}
    >
      <View className="mb-6 rounded-2xl  overflow-hidden ">
        <View className="w-full aspect-square rounded-t-2xl overflow-hidden">
          <Image
            className="w-full h-full"
            source={{ uri: image }}
            alt={title}
            resizeMode="cover"
          />
        </View>

        <View className="bg-white p-4 gap-6">
          <View className="">
            <Text className="text-lg  font-semibold text-gray-800">
              {title}
            </Text>
          </View>

          <View className="flex-row justify-between items-center">
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={22} color="#f44336" />
            </TouchableOpacity>
            <View>
              <Text className="ml-2 text-base font-semibold text-orange-700">
                ${Number(price).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default ProductItem;
