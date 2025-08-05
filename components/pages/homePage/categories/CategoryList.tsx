import Errors from "@/components/Errors";
import Loaders from "@/components/Loaders";
import { useGetCategories } from "@/hooks/useQuery";
import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
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
    <View className="py-10">
      <Text className="mb-4 text-center text-3xl font-bold">Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => <CategoryItem {...item} />}
        contentContainerStyle={{
          paddingBlock: 10,
          paddingHorizontal: 10,
          gap: 10,
        }}
        ListEmptyComponent={
          <Text className="text-center text-gray-500">
            No categories found.
          </Text>
        }
      />
    </View>
  );
};

export default CategoryList;
