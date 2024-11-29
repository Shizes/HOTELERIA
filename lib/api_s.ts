import axios from "axios";

const API_URL = "https://674761ab38c8741641d6886a.mockapi.io/users";

// Función para registrar un usuario
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(API_URL, userData); // Envía los datos a MockAPI
    return response.data; // Devuelve el usuario registrado
  } catch (error) {
    throw new Error("Error al registrar el usuario");
  }
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(API_URL); // Obtiene todos los usuarios

    // Busca el usuario con el email y contraseña proporcionados
    const user = response.data.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (user) {
      return user; // Devuelve el usuario encontrado
    } else {
      throw new Error("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};
