import { getElementById } from '../utils/helpers.js';
import { VALIDATION } from '../utils/constants.js';

/**
 * Muestra un mensaje de error en el elemento especificado
 * @param {HTMLElement} errorElement - Elemento donde mostrar el error
 * @param {string} message - Mensaje de error a mostrar
 */
export const showError = (errorElement, message) => {
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.setAttribute('aria-live', 'polite');
  }
};

/**
 * Limpia el mensaje de error del elemento especificado
 * @param {HTMLElement} errorElement - Elemento del que limpiar el error
 */
export const clearError = (errorElement) => {
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    errorElement.removeAttribute('aria-live');
  }
};

/**
 * Alterna la visibilidad de los campos de contraseña
 * @param {HTMLElement} passwordInput - Campo de contraseña principal
 * @param {HTMLElement} confirmPasswordInput - Campo de confirmación de contraseña
 */
export const togglePasswordVisibility = (passwordInput, confirmPasswordInput) => {
  if (!passwordInput) return;
  
  const isPassword = passwordInput.type === VALIDATION.PASSWORD_INPUT_TYPE.HIDDEN;
  const newType = isPassword ? 
    VALIDATION.PASSWORD_INPUT_TYPE.VISIBLE : 
    VALIDATION.PASSWORD_INPUT_TYPE.HIDDEN;
  
  passwordInput.type = newType;
  
  if (confirmPasswordInput) {
    confirmPasswordInput.type = newType;
  }
};

/**
 * Muestra un mensaje de éxito (reemplaza el alert)
 * @param {string} message - Mensaje de éxito
 */
export const showSuccessMessage = (message) => {
  // Por ahora mantenemos el alert, luego se puede mejorar con un toast
  alert(message);
};

/**
 * Actualiza todos los mensajes de error del formulario
 * @param {Object} errors - Objeto con los errores
 * @param {Object} errorElements - Objeto con los elementos de error
 */
export const updateFormErrors = (errors, errorElements) => {
  // Limpiar todos los errores primero
  Object.values(errorElements).forEach(element => {
    clearError(element);
  });
  
  // Mostrar nuevos errores
  if (errors.email && errorElements.email) {
    showError(errorElements.email, errors.email);
  }
  
  if (errors.password && errorElements.password) {
    showError(errorElements.password, errors.password);
  }
  
  if (errors.confirmPassword && errorElements.confirmPassword) {
    showError(errorElements.confirmPassword, errors.confirmPassword);
  }
};
