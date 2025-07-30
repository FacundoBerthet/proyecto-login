// Constantes de validación
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_PASSWORD_LENGTH: 6,
  PASSWORD_INPUT_TYPE: {
    HIDDEN: 'password',
    VISIBLE: 'text'
  }
};

// Constantes de elementos DOM
export const DOM_ELEMENTS = {
  LOGIN_FORM: 'loginForm',
  EMAIL_INPUT: 'email',
  PASSWORD_INPUT: 'password',
  CONFIRM_PASSWORD_INPUT: 'confirmPassword',
  EMAIL_ERROR: 'emailError',
  PASSWORD_ERROR: 'passwordError',
  CONFIRM_PASSWORD_ERROR: 'confirmPasswordError',
  SHOW_HIDE_BUTTON: 'show-hide'
};

// Constantes de mensajes
export const MESSAGES = {
  INVALID_EMAIL: 'Ingresa un email válido',
  SHORT_PASSWORD: 'Ingresa una contraseña de al menos 6 caracteres',
  PASSWORD_MISMATCH: 'Las contraseñas no coinciden',
  LOGIN_SUCCESS: 'Has ingresado con éxito'
};

// Constantes de almacenamiento
export const STORAGE_KEYS = {
  EMAIL: 'email',
  USER_DATA: 'userData'
};
