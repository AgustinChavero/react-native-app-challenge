import { create } from "zustand";
import { getAll } from "../../services/actions/get-all";

export const useDiscounts = create((set) => ({
  allDiscounts: [],
  fetchData: async () => {
    try {
      const stores = await getAll("discount");
      set((state) => ({
        allDiscounts: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
