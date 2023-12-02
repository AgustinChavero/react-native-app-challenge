import { create } from "zustand";
import { getAllProducts } from "../../services/actions/products/get-all-products";

export const useProducts = create((set) => ({
  allProducts: [],
  fetchData: async () => {
    try {
      const stores = await getAllProducts();
      set((state) => ({
        allProducts: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
