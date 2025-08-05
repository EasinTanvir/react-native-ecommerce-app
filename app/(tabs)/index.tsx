import CarouselSlider from "@/components/pages/homePage/carousel/Carousel";
import CategoryList from "@/components/pages/homePage/categories/CategoryList";
import ProductList from "@/components/pages/homePage/products/ProductList";
import React from "react";
import { ScrollView } from "react-native";

const HomePage = () => {
  return (
    <ScrollView className="px-2">
      <CarouselSlider />
      <CategoryList />
      <ProductList />
    </ScrollView>
  );
};

export default HomePage;
