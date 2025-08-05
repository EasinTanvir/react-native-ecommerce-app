import { useGlobalContext } from "@/contextApis/GlobalContext";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CartPage = () => {
  const { cartItems, setCartItems } = useGlobalContext();

  const handleRemove = async (id: string) => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        style: "destructive",
        onPress: async () => {
          const updated = cartItems.filter((item) => item.id !== id);
          setCartItems(updated);
          await AsyncStorage.setItem("cartItems", JSON.stringify(updated));
        },
      },
    ]);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <View className="flex-1 bg-white px-4 py-6">
      {cartItems.length === 0 ? (
        <Text className="text-center text-gray-500 my-12 text-2xl font-semibold">
          Your cart is empty.
        </Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold text-gray-800 mb-6">
            Your Cart
          </Text>
          {cartItems.map((item) => (
            <View
              key={item.id}
              className="flex-row bg-gray-100 rounded-xl mb-4 p-3 shadow-sm"
            >
              <Image
                source={{ uri: item.image }}
                className="w-24 h-24 rounded-lg"
                resizeMode="cover"
              />

              <View className="flex-1 ml-4 justify-between">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </Text>
                  <Text className="text-green-600 font-medium mt-1">
                    ${item.price}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleRemove(item.id)}
                  className="flex-row items-center mt-2"
                >
                  <FontAwesome name="trash" size={16} color="#dc2626" />
                  <Text className="ml-1 text-red-600 text-sm font-medium">
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Summary */}
          <View className="mt-6 p-4 bg-brandColor rounded-xl">
            <Text className="text-white text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CartPage;
