import Errors from "@/components/Errors";
import Loaders from "@/components/Loaders";
import { useGetSingleProducts } from "@/hooks/useQuery";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductDetails = () => {
  const { pId } = useLocalSearchParams();

  const {
    data: product,
    isLoading: loadingProducts,
    error: productError,
  } = useGetSingleProducts(pId as string, !!pId);

  if (loadingProducts) return <Loaders />;
  if (productError) return <Errors />;

  return (
    <SafeAreaView className="flex-1 bg-white my-4">
      <ScrollView className="px-4">
        {/* Product Image */}
        <Image
          source={{ uri: product?.image }}
          className="w-full h-72 rounded-3xl shadow-lg shadow-brandColor"
          resizeMode="cover"
        />

        {/* Content Container */}
        <View className="px-4 py-6">
          {/* Title */}
          <Text className="text-2xl font-bold text-gray-900 mb-3">
            {product?.title}
          </Text>

          {/* Price */}
          <View className="flex-row items-center mb-4">
            <FontAwesome name="dollar" size={18} color="#10b981" />
            <Text className="text-lg text-green-600 font-semibold ml-1">
              {product?.price}
            </Text>
          </View>

          {/* Description */}
          <View className="flex-row items-start mb-4">
            <Feather name="info" size={18} color="#6b7280" />
            <Text className="ml-2 text-gray-600 text-base flex-1">
              {product?.description}
            </Text>
          </View>

          {/* Category */}
          <View className="flex-row items-center mb-6">
            <Feather name="tag" size={18} color="#6b7280" />
            <Text className="ml-2 text-gray-600 text-base">
              Category: {product?.category?.name}
            </Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between gap-4">
            <TouchableOpacity className="flex-1 bg-brandColor py-3 rounded-xl">
              <Text className="text-white text-center font-medium text-base">
                Add to Cart
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 border border-brandColor py-3 rounded-xl">
              <Text className="text-brandColor text-center font-medium text-base">
                Wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
