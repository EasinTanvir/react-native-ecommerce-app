import React from "react";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({
  allCategoriesProducts,
}: {
  allCategoriesProducts: any[];
}) => {
  return (
    <FlatList
      scrollEnabled={false}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={{ gap: 10 }}
      keyExtractor={(item) => item?.id?.toString()}
      data={allCategoriesProducts}
      renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
    />
  );
};

export default ProductList;
