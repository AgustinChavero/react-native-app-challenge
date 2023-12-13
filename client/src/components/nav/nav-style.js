import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: "#3f51b5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    position: "relative",
    zIndex: 1000,
  },
  icon: {
    padding: 10,
  },
  menuIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  menuText: {
    marginLeft: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  profileText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  menu: {
    position: "absolute",
    top: 60,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#3f51b5",
    zIndex: 999,
    paddingTop: 60,
  },
  menuItem: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 5,
    textAlign: "center",
  },
});
