import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    backgroundColor: "#3f51b5", // Cambia el color de fondo si deseas
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%", // Asegura que ocupe todo el ancho de la pantalla
  },
  icon: {
    padding: 10,
  },
  menuIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20, // Añade el padding izquierdo
  },
  menuText: {
    marginLeft: 5,
    color: "#fff", // Color del texto del menú
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    alignItems: "center",
  },
  titleText: {
    color: "#fff", // Color del texto del título
    fontSize: 18,
    fontWeight: "bold",
  },
  profileIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20, // Añade el padding derecho
  },
  profileText: {
    color: "#fff", // Color del texto del perfil
    fontWeight: "bold",
    fontSize: 16,
  },
  menu: {
    position: "absolute",
    top: 60, // Altura de la barra de navegación
    right: 0,
    backgroundColor: "#3f51b5", // Color del menú desplegable
    padding: 10,
    zIndex: 1000,
  },
  menuItem: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 5,
  },
});
