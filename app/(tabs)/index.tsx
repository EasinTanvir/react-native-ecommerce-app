import CategoryList from "@/components/pages/homePage/categories/CategoryList";
import { categories } from "@/utils/data";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <CategoryList categories={categories} />
    </View>
  );
};

export default HomePage;
