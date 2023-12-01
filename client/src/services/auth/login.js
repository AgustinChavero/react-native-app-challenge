import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      { password },
      {
        params: { email },
      }
    );

    if (response.status === 200) {
      // Autenticación exitosa, puedes manejar la lógica aquí
      console.log("Inicio de sesión exitoso:", response.data);
      return response.data; // Puedes devolver los datos si es necesario
    } else {
      // Manejar errores de inicio de sesión
      console.error("Error al iniciar sesión");
      throw new Error("Error al iniciar sesión");
    }
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error("Error al enviar solicitud:", error);
    throw new Error("Error al enviar solicitud:", error);
  }
};

export { login };
