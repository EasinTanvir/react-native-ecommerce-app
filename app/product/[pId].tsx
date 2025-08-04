import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const ProductDetails = () => {
  const { pId } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{pId}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
