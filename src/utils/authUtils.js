import { jwtDecode } from 'jwt-decode';


// Guardar el token en localStorage
export const saveToken = (token) => {
  localStorage.setItem('token', token);
  console.log('Token guardado:', token); // Agrega esta línea para depuración
};

// Obtener el token de localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Eliminar el token de localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Obtener el user_id desde el token
export const getUserIdFromToken = () => {
  const token = getToken();
  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Decodificar el token
      return decodedToken.user_id;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
  return null;
};

// Función para obtener el rol del token decodificado
export const getRoleFromToken = () => {
  const token = getToken();
  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Decodificar el token
      return decodedToken.role; // Obtener el rol del payload
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
  return null;
};
