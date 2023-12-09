import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productName: {
    fontSize: 16,
  },
  detailButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
