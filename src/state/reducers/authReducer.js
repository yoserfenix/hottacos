import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes';

const initialState = {
  token: null,
  role: null,
  error: null,
  registrationSuccess: false, // Para manejar el éxito en el registro
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        role: null,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        registrationSuccess: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        registrationSuccess: false,
      };
    default:
      return state;
  }
};

export default authReducer;
