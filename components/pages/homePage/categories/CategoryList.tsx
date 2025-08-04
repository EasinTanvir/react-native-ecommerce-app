import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }: { categories: any[] }) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % categories.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, categories.length]);

  return (
    <View className="py-3">
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryItem {...item} />}
        contentContainerStyle={{
          paddingHorizontal: 12,
          gap: 12,
        }}
        getItemLayout={(_, index) => ({
          length: 80,
          offset: 80 * index,
          index,
        })}
      />
    </View>
  );
};

export default CategoryList;
