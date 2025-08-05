import Errors from "@/components/Errors";
import Loaders from "@/components/Loaders";
import { useGetCategories } from "@/hooks/useQuery";
import { Category } from "@/utils/types";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const Categories = () => {
  const {
    data: categories,
    isLoading: loadingCategories,
    error: categoryError,
  } = useGetCategories(true);

  if (loadingCategories) {
    return <Loaders />;
  }

  if (categoryError) {
    return <Errors />;
  }

  return (
    <View className="p-4">
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",

          gap: 10,
          paddingBlock: 10,
        }}
        ListHeaderComponent={
          <Text className="text-xl text-center font-bold text-gray-800 mb-4">
            Categories
          </Text>
        }
      />
    </View>
  );
};

export default Categories;

const CategoryCard = ({ image, name, id }: Category) => {
  return (
    <Link
      href={{ pathname: "/category/[cId]", params: { cId: id } }}
      className="w-[31%]  bg-white rounded-xl overflow-hidden shadow-sm"
    >
      <Image
        source={{ uri: image }}
        className="w-full h-24"
        resizeMode="cover"
      />
      <View className="p-2">
        <Text className="text-sm font-medium text-center text-gray-800">
          {name}
        </Text>
      </View>
    </Link>
  );
};
