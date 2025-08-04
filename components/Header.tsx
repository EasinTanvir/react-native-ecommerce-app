import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = ({ isAuth = false }: { isAuth?: boolean }) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      className="bg-brandColor flex-row justify-between items-center gap-6  h-28 px-2"
      style={{ paddingTop: isAuth ? 0 : insets.top }}
    >
      <View className="w-fit">
        <Link href="/(tabs)" className="text-white text-3xl font-bold  italic">
          Shop
        </Link>
      </View>

      {!isAuth ? (
        <View className="flex-row items-center gap-4">
          <Link href="/login">
            <Ionicons name="heart" color="white" size={26} />
          </Link>
          <Link href="/login">
            <Ionicons name="log-out" color="white" size={26} />
          </Link>
        </View>
      ) : (
        <View className="w-fit flex-row justify-end">
          <TouchableOpacity onPress={() => router.back()} className="p-4">
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
