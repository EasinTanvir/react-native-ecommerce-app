import { Product } from "@/utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type SearchContextType = {
  cartItems: Product[];
  setCartItems: (value: Product[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: SearchProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load from AsyncStorage on mount
  useEffect(() => {
    const loadCart = async () => {
      const stored = await AsyncStorage.getItem("cartItems");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    };
    loadCart();
  }, []);

  // Sync to AsyncStorage whenever cart changes
  useEffect(() => {
    AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <SearchContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useGlobalContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
