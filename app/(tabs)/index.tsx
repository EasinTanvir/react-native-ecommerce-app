import CarouselSlider from "@/components/pages/homePage/carousel/Carousel";
import CategoryList from "@/components/pages/homePage/categories/CategoryList";
import ProductList from "@/components/pages/homePage/products/ProductList";
import { allCategoriesProducts, categories } from "@/utils/data";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  return (
    <View className="px-2">
      <CarouselSlider />
      <CategoryList categories={categories} />
      <ProductList allCategoriesProducts={allCategoriesProducts} />
    </View>
  );
};

export default HomePage;
