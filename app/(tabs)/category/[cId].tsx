import Errors from "@/components/Errors";
import Loaders from "@/components/Loaders";
import ProductItem from "@/components/pages/homePage/products/ProductItem";
import { useGetProductsByCategoryId } from "@/hooks/useQuery";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList } from "react-native";

const CategoryDetails = () => {
  const { cId } = useLocalSearchParams();

  const {
    data: categoryProduct,
    isLoading: loadingProducts,
    error: productError,
  } = useGetProductsByCategoryId(cId as string, true);

  if (loadingProducts) {
    return <Loaders />;
  }

  if (productError) {
    return <Errors />;
  }
  return (
    <FlatList
      scrollEnabled={false}
      horizontal={false}
      numColumns={2}
      columnWrapperStyle={{ gap: 10, marginBlock: 10 }}
      keyExtractor={(item) => item?.id?.toString()}
      data={categoryProduct}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 25,
      }}
      renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
    />
  );
};

export default CategoryDetails;
