import { Ionicons } from "@expo/vector-icons";

interface TabIconProps {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  size: number;
}

export { TabIconProps };
