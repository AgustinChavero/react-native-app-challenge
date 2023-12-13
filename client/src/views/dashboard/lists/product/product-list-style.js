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
    marginTop: 20, // Adjusted margin for the "Crear Producto" button
  },
  buttonText: {
    color: "#fff",
  },
  searchContainer: {
    alignItems: "center",
    marginTop: 20, // Added margin to separate the "Crear Producto" button and the search field
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%", // Adjusted width to occupy 80% of the screen
    marginBottom: 20, // Added margin at the bottom of the search input
  },
});
