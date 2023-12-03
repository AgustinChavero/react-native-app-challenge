import { create } from "zustand";
import { getAll } from "../../services/actions/get-all";

export const useStats = create((set) => ({
  allStats: [],
  fetchData: async () => {
    try {
      const stores = await getAll("invoice");
      set((state) => ({
        allStats: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
