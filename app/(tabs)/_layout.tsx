import Header from "@/components/Header";
import TabBarIcon from "@/components/TabBarIcon";
import { brandColor } from "@/constant";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: brandColor,
          paddingTop: 14,
          paddingBottom: insets.bottom,
        },
        tabBarItemStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          header: () => <Header />,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={20}
              focused={focused}
              name="Home"
              iconName="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarShowLabel: false,
          header: () => <Header />,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={21}
              focused={focused}
              name="Search"
              iconName="search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          header: () => <Header />,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={20}
              focused={focused}
              name="Categories"
              iconName="diamond-sharp"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarShowLabel: false,
          header: () => <Header />,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={24}
              focused={focused}
              name="Cart"
              iconName="cart"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          header: () => <Header />,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={24}
              focused={focused}
              name="Profile"
              iconName="log-in"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          header: () => <Header />,
          href: null,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

//home/
// category/
// profile
//cart

// searchbut not shoed
