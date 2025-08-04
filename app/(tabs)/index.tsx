import CarouselSlider from "@/components/pages/homePage/carousel/Carousel";
import CategoryList from "@/components/pages/homePage/categories/CategoryList";
import { categories } from "@/utils/data";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <CarouselSlider />
      <CategoryList categories={categories} />
    </View>
  );
};

export default HomePage;
