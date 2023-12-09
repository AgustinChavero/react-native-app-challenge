import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
  },
});
