// hooks/useCategories.ts

import { apiInstance } from "@/apiInstance/api";
import { Category, Product } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetCategories = (enabled = true) => {
  return useQuery<Category[], AxiosError>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await apiInstance.get<Category[]>("/api/category");
      return data;
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useGetProducts = (enabled = true) => {
  return useQuery<Product[], AxiosError>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await apiInstance.get<Product[]>("/api/product");
      return data;
    },
    enabled,
    staleTime: 5 * 60 * 1000,
  });
};
export const useGetSingleProducts = (productId: string, enabled = true) => {
  return useQuery<Product, AxiosError>({
    queryKey: ["products", productId],
    queryFn: async () => {
      const { data } = await apiInstance.get<Product>(`/api/${productId}`);
      return data;
    },
    enabled,
    staleTime: 5 * 60 * 1000,
  });
};
