import { VALIDATION, MESSAGES } from '../utils/constants.js';
import { trimString, isEmpty } from '../utils/helpers.js';

/**
 * Valida un email usando regex
 * @param {string} email - Email a validar
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validateEmail = (email) => {
  const cleanEmail = trimString(email);
  
  if (isEmpty(cleanEmail)) {
    return {
      isValid: false,
      message: 'El email es requerido'
    };
  }
  
  if (!VALIDATION.EMAIL_REGEX.test(cleanEmail)) {
    return {
      isValid: false,
      message: MESSAGES.INVALID_EMAIL
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida la longitud de la contraseña
 * @param {string} password - Contraseña a validar
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validatePassword = (password) => {
  const cleanPassword = trimString(password);
  
  if (isEmpty(cleanPassword)) {
    return {
      isValid: false,
      message: 'La contraseña es requerida'
    };
  }
  
  if (cleanPassword.length < VALIDATION.MIN_PASSWORD_LENGTH) {
    return {
      isValid: false,
      message: MESSAGES.SHORT_PASSWORD
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida que dos contraseñas coincidan
 * @param {string} password - Contraseña original
 * @param {string} confirmPassword - Contraseña de confirmación
 * @returns {Object} - {isValid: boolean, message: string}
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  const cleanPassword = trimString(password);
  const cleanConfirmPassword = trimString(confirmPassword);
  
  if (cleanPassword !== cleanConfirmPassword) {
    return {
      isValid: false,
      message: MESSAGES.PASSWORD_MISMATCH
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Valida todo el formulario
 * @param {string} email - Email del formulario
 * @param {string} password - Contraseña del formulario
 * @param {string} confirmPassword - Confirmación de contraseña
 * @returns {Object} - {isValid: boolean, errors: Object}
 */
export const validateForm = (email, password, confirmPassword) => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const passwordMatchValidation = validatePasswordMatch(password, confirmPassword);
  
  const isFormValid = emailValidation.isValid && 
                     passwordValidation.isValid && 
                     passwordMatchValidation.isValid;
  
  return {
    isValid: isFormValid,
    errors: {
      email: emailValidation.message,
      password: passwordValidation.message,
      confirmPassword: passwordMatchValidation.message
    }
  };
};
