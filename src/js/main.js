// Importar módulos
import { DOM_ELEMENTS } from './utils/constants.js';
import { getElementById } from './utils/helpers.js';
import { validateForm, validateEmail } from './modules/validation.js';
import { 
  showError, 
  clearError, 
  togglePasswordVisibility, 
  showSuccessMessage,
  updateFormErrors 
} from './modules/ui.js';
import { authenticateUser } from './modules/auth.js';

/**
 * Clase principal que maneja el formulario de login
 */
class LoginForm {
  constructor() {
    this.elements = this.initializeElements();
    this.setupEventListeners();
  }

  /**
   * Inicializa las referencias a los elementos del DOM
   */
  initializeElements() {
    return {
      form: getElementById(DOM_ELEMENTS.LOGIN_FORM),
      emailInput: getElementById(DOM_ELEMENTS.EMAIL_INPUT),
      passwordInput: getElementById(DOM_ELEMENTS.PASSWORD_INPUT),
      confirmPasswordInput: getElementById(DOM_ELEMENTS.CONFIRM_PASSWORD_INPUT),
      showHideButton: getElementById(DOM_ELEMENTS.SHOW_HIDE_BUTTON),
      errors: {
        email: getElementById(DOM_ELEMENTS.EMAIL_ERROR),
        password: getElementById(DOM_ELEMENTS.PASSWORD_ERROR),
        confirmPassword: getElementById(DOM_ELEMENTS.CONFIRM_PASSWORD_ERROR)
      }
    };
  }

  /**
   * Configura todos los event listeners
   */
  setupEventListeners() {
    if (!this.elements.form) {
      console.error('Formulario de login no encontrado');
      return;
    }

    // Event listener para el envío del formulario
    this.elements.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleFormSubmit();
    });

    // Event listener para validación de email al perder el foco
    if (this.elements.emailInput) {
      this.elements.emailInput.addEventListener('blur', () => {
        this.handleEmailBlur();
      });

      this.elements.emailInput.addEventListener('input', () => {
        clearError(this.elements.errors.email);
      });
    }

    // Event listeners para limpiar errores al escribir
    if (this.elements.passwordInput) {
      this.elements.passwordInput.addEventListener('input', () => {
        clearError(this.elements.errors.password);
      });
    }

    if (this.elements.confirmPasswordInput) {
      this.elements.confirmPasswordInput.addEventListener('input', () => {
        clearError(this.elements.errors.confirmPassword);
      });
    }

    // Event listener para mostrar/ocultar contraseñas
    if (this.elements.showHideButton) {
      this.elements.showHideButton.addEventListener('click', () => {
        this.handleTogglePassword();
      });
    }
  }

  /**
   * Maneja el envío del formulario
   */
  handleFormSubmit() {
    const formData = this.getFormData();
    const validationResult = validateForm(
      formData.email, 
      formData.password, 
      formData.confirmPassword
    );

    if (validationResult.isValid) {
      this.processSuccessfulValidation(formData);
    } else {
      this.processValidationErrors(validationResult.errors);
    }
  }

  /**
   * Obtiene los datos del formulario
   */
  getFormData() {
    return {
      email: this.elements.emailInput?.value || '',
      password: this.elements.passwordInput?.value || '',
      confirmPassword: this.elements.confirmPasswordInput?.value || ''
    };
  }

  /**
   * Procesa una validación exitosa
   */
  processSuccessfulValidation(formData) {
    const authResult = authenticateUser(formData.email, formData.password);
    
    if (authResult.success) {
      showSuccessMessage(authResult.message);
      this.clearForm();
    } else {
      showError(this.elements.errors.email, authResult.message);
    }
  }

  /**
   * Procesa errores de validación
   */
  processValidationErrors(errors) {
    updateFormErrors(errors, this.elements.errors);
  }

  /**
   * Maneja la validación de email al perder el foco
   */
  handleEmailBlur() {
    const email = this.elements.emailInput?.value || '';
    const emailValidation = validateEmail(email);
    
    if (!emailValidation.isValid && email.length > 0) {
      showError(this.elements.errors.email, emailValidation.message);
    }
  }

  /**
   * Maneja el toggle de visibilidad de contraseñas
   */
  handleTogglePassword() {
    togglePasswordVisibility(
      this.elements.passwordInput,
      this.elements.confirmPasswordInput
    );
  }

  /**
   * Limpia el formulario después de un login exitoso
   */
  clearForm() {
    if (this.elements.emailInput) this.elements.emailInput.value = '';
    if (this.elements.passwordInput) this.elements.passwordInput.value = '';
    if (this.elements.confirmPasswordInput) this.elements.confirmPasswordInput.value = '';
    
    // Limpiar todos los errores
    Object.values(this.elements.errors).forEach(errorElement => {
      clearError(errorElement);
    });
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new LoginForm();
});
