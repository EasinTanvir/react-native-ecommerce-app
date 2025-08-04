import TabBarIcon from "@/components/TabBarIcon";
import { brandColor } from "@/constant";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: brandColor,
          paddingTop: 14,
        },
        tabBarItemStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
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
        name="categories"
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarShowLabel: false,
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
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused }) => (
            <TabBarIcon
              size={24}
              focused={focused}
              name="LogIn"
              iconName="log-in"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
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
