import React from "react";
import { FlatList, View } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({
  allCategoriesProducts,
}: {
  allCategoriesProducts: any[];
}) => {
  return (
    <View className="">
      <FlatList
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        keyExtractor={(item) => item?.id?.toString()}
        data={allCategoriesProducts}
        renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
      />
    </View>
  );
};

export default ProductList;
