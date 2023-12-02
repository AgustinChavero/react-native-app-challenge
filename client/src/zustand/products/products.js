import { create } from "zustand";
import { getAll } from "../../services/actions/get-all";

export const useProducts = create((set) => ({
  allProducts: [],
  fetchData: async () => {
    try {
      const stores = await getAll("product");
      set((state) => ({
        allProducts: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
