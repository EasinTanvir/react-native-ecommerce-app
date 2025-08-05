import { Ionicons } from "@expo/vector-icons";

interface TabIconProps {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  size: number;
}

// types.ts

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  categoryId: string;
  category?: Category;
}

export { Category, Product, TabIconProps };
