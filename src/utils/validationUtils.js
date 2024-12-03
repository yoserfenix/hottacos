// src/utils/validationUtils.js

// Validar el formato del correo electrónico
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Validar la longitud mínima de la contraseña
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validar que el nombre de usuario tenga una longitud mínima
export const validateUsername = (username) => {
  return username.length >= 3; // Ajusta según tus requisitos
};

// Validar los datos de registro
export const validateRegistrationData = (data) => {
  const errors = {};

  // Asegúrate de que cada campo sea una cadena y tenga un valor
  const name = data.username ? data.username.trim() : '';
  const email = data.email ? data.email.trim() : '';
  const password = data.password ? data.password.trim() : '';
  const confirmPassword = data.confirmPassword ? data.confirmPassword.trim() : '';

  // Validar nombre
  if (!name) {
    errors.name = 'El nombre de usuario es obligatorio';
  } else if (!validateUsername(name)) {
    errors.name = 'El nombre de usuario debe tener al menos 3 caracteres';
  }

  // Validar correo electrónico
  if (!email) {
    errors.email = 'El correo electrónico es obligatorio';
  } else if (!validateEmail(email)) {
    errors.email = 'El correo electrónico no es válido';
  }

  // Validar contraseña
  if (!password) {
    errors.password = 'La contraseña es obligatoria';
  } else if (!validatePassword(password)) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  // Validar confirmación de contraseña
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  return errors;
};
