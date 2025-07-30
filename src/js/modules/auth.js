import { saveUserData, bodyBuilderJSON } from './storage.js';
import { MESSAGES } from '../utils/constants.js';

/**
 * Procesa el login del usuario
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Object} - Resultado del login
 */
export const processLogin = (email, password) => {
  try {
    // Guardar datos en localStorage
    saveUserData(email, password);
    
    // Crear el cuerpo JSON para logs/debug
    const body = bodyBuilderJSON(email, password);
    console.log('Datos de login procesados:', body);
    
    return {
      success: true,
      message: MESSAGES.LOGIN_SUCCESS,
      data: body
    };
    
  } catch (error) {
    console.error('Error en el proceso de login:', error);
    
    return {
      success: false,
      message: 'Error interno. Por favor, intenta nuevamente.',
      data: null
    };
  }
};

/**
 * Simula la verificación de credenciales
 * En un futuro se puede conectar con un API real
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {boolean} - true si las credenciales son válidas
 */
export const verifyCredentials = (email, password) => {
  // Por ahora acepta cualquier credencial válida
  // En el futuro aquí se haría la llamada al API
  return email && password;
};

/**
 * Maneja el proceso completo de autenticación
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Object} - Resultado de la autenticación
 */
export const authenticateUser = (email, password) => {
  const isValidCredentials = verifyCredentials(email, password);
  
  if (!isValidCredentials) {
    return {
      success: false,
      message: 'Credenciales inválidas',
      data: null
    };
  }
  
  return processLogin(email, password);
};
