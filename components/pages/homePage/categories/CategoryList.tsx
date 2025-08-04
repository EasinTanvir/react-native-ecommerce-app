import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }: { categories: any }) => {
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
      />
    </View>
  );
};

export default CategoryList;
