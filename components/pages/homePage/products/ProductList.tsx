import Errors from "@/components/Errors";
import { useGetProducts } from "@/hooks/useQuery";
import React from "react";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const {
    data: products,
    isLoading: loadingProducts,
    error: productError,
  } = useGetProducts(true);

  // if (loadingProducts) {
  //   return <Loaders />;
  // }

  if (productError) {
    return <Errors />;
  }

  return (
    <FlatList
      scrollEnabled={false}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={{ gap: 10 }}
      keyExtractor={(item) => item?.id?.toString()}
      data={products}
      renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
    />
  );
};

export default ProductList;
