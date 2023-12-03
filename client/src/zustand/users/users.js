import { create } from "zustand";
import { getAll } from "../../services/actions/get-all";

export const useUsers = create((set) => ({
  allUsers: [],
  fetchData: async () => {
    try {
      const stores = await getAll("user");
      set((state) => ({
        allUsers: stores,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
