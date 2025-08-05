import EmptyProduct from "@/components/EmptyProduct";
import Errors from "@/components/Errors";
import ProductItem from "@/components/pages/homePage/products/ProductItem";
import ProductSearch from "@/components/pages/search/ProductSearch";
import { useGlobalContext } from "@/contextApis/GlobalContext";
import { useGetProducts } from "@/hooks/useQuery";
import React from "react";
import { FlatList } from "react-native";

const CartPage = () => {
  const { searchProduct } = useGlobalContext();

  const {
    data: products,
    isLoading: loadingProducts,
    error: productError,
  } = useGetProducts(true);

  // if (loadingProducts) {
  //   return <Loaders />;
  // }
  const filteredProducts = products?.filter((product) =>
    product?.title?.toLowerCase().includes(searchProduct?.toLowerCase())
  );

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
      data={filteredProducts}
      renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 25,
        gap: 20,
      }}
      ListHeaderComponent={<ProductSearch />}
      ListEmptyComponent={<EmptyProduct />}
    />
  );
};

export default CartPage;
