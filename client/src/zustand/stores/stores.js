import { create } from "zustand";
import { getAll } from "../../services/actions/get-all";

export const useStores = create((set) => ({
  allStores: [],
  fetchData: async () => {
    try {
      const stores = await getAll("store");
      set((state) => ({
        allStores: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
