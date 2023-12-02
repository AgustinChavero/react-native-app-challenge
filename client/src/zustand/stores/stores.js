import { create } from "zustand";
import { getAllStores } from "../../services/actions/stores/get-all-stores";

export const useStores = create((set) => ({
  allStores: [],
  fetchData: async () => {
    try {
      const stores = await getAllStores();
      set((state) => ({
        allStores: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
