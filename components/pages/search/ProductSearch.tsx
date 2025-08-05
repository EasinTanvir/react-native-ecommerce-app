import { brandColor } from "@/constant";
import { useGlobalContext } from "@/contextApis/GlobalContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

const ProductSearch = () => {
  const { setSearchProduct } = useGlobalContext();

  return (
    <View className="flex flex-row">
      <TextInput
        onChangeText={(text) => setSearchProduct(text)}
        className="p-4  flex-1 gap-0 border border-r-0 rounded-l-md"
        placeholder="Search here"
        placeholderTextColor={brandColor}
      />
      <View className="w-16 items-center justify-center bg-brandColor rounded-r-md">
        <Ionicons name="search" color="white" size={25} />
      </View>
    </View>
  );
};

export default ProductSearch;
