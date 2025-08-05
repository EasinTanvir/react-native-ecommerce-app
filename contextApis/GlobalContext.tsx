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
  searchProduct: string;
  setCartItems: (value: Product[]) => void;
  setSearchProduct: (value: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: SearchProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchProduct, setSearchProduct] = useState("");

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
    <SearchContext.Provider
      value={{ cartItems, setCartItems, searchProduct, setSearchProduct }}
    >
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
