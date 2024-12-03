import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes';
import { authService } from '../../services/authService';
import { saveToken, removeToken } from '../../utils/authUtils';
import { jwtDecode } from 'jwt-decode';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await authService.login(email, password);
    const { token } = response;

    // Guardar el token en localStorage
    saveToken(token);

    // Decodificar el token para obtener información
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, role },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      error: 'Credenciales incorrectas',
    });
  }
};

export const logoutUser = () => (dispatch) => {
  // Eliminar el token del localStorage
  removeToken();

  dispatch({
    type: LOGOUT,
  });
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await authService.register(userData.username, userData.email, userData.password);
    if (response.message === "User registered successfully") {
      dispatch({ type: REGISTER_SUCCESS });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      error: error.message || 'Error en el registro'
    });
  }
};