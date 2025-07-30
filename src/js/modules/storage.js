import { STORAGE_KEYS } from '../utils/constants.js';
import { createUserData } from '../utils/helpers.js';

/**
 * Guarda el email del usuario en localStorage
 * @param {string} email - Email a guardar
 */
export const saveEmail = (email) => {
  try {
    localStorage.setItem(STORAGE_KEYS.EMAIL, email);
  } catch (error) {
    console.error('Error al guardar el email:', error);
  }
};

/**
 * Recupera el email del usuario desde localStorage
 * @returns {string|null} - Email guardado o null si no existe
 */
export const getEmail = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.EMAIL);
  } catch (error) {
    console.error('Error al recuperar el email:', error);
    return null;
  }
};

/**
 * Guarda los datos completos del usuario en localStorage
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 */
export const saveUserData = (email, password) => {
  try {
    const userData = createUserData(email, password);
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
    
    // También guardar solo el email por compatibilidad
    saveEmail(email);
  } catch (error) {
    console.error('Error al guardar los datos del usuario:', error);
  }
};

/**
 * Recupera los datos completos del usuario desde localStorage
 * @returns {Object|null} - Datos del usuario o null si no existen
 */
export const getUserData = () => {
  try {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error al recuperar los datos del usuario:', error);
    return null;
  }
};

/**
 * Limpia todos los datos del usuario del localStorage
 */
export const clearUserData = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.EMAIL);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  } catch (error) {
    console.error('Error al limpiar los datos del usuario:', error);
  }
};

/**
 * Crea el objeto JSON del cuerpo (mantiene la función original)
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Object} - Objeto JSON con email y password
 */
export const bodyBuilderJSON = (email, password) => {
  return {
    "email": email,
    "password": password
  };
};
