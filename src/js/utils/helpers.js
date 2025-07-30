// Funciones auxiliares de uso general

/**
 * Obtiene un elemento del DOM por su ID
 * @param {string} elementId - ID del elemento
 * @returns {HTMLElement|null} - Elemento del DOM o null si no existe
 */
export const getElementById = (elementId) => {
  return document.getElementById(elementId);
};

/**
 * Limpia espacios en blanco al inicio y final de una cadena
 * @param {string} str - Cadena a limpiar
 * @returns {string} - Cadena limpia
 */
export const trimString = (str) => {
  return str.trim();
};

/**
 * Crea un objeto con los datos del formulario
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Object} - Objeto con los datos del usuario
 */
export const createUserData = (email, password) => {
  return {
    email: email,
    password: password,
    timestamp: new Date().toISOString()
  };
};

/**
 * Verifica si una cadena está vacía o solo contiene espacios
 * @param {string} str - Cadena a verificar
 * @returns {boolean} - true si está vacía, false en caso contrario
 */
export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};
