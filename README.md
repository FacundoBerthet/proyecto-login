# Proyecto Login

Formulario de inicio de sesión moderno con validación del lado del cliente, construido con JavaScript vanilla modular y CSS organizado.

## ¿Qué hace?

Un formulario de login que valida email y contraseñas en tiempo real, guarda los datos en localStorage y proporciona feedback visual claro al usuario.

## Características

- **Validación en tiempo real** de email y contraseñas
- **Mostrar/ocultar contraseñas** 
- **Mensajes de error claros** 
- **Almacenamiento local** de datos del usuario
- **Diseño responsivo** 
- **Código modular** fácil de mantener

## Tecnologías

- HTML5 
- CSS3 
- JavaScript 
- LocalStorage para persistencia

## 📁 Estructura

```
proyecto-login/
├── src/
│   ├── js/          # JavaScript modular
│   └── css/         # CSS organizado
├── public/
│   └── index.html   # Página principal
├── config/          # Configuraciones
└── tests/           # Pruebas (preparado)
```

## 🎯 Cómo usar

1. **Abrir** `public/index.html` en tu navegador
2. **Llenar** el formulario:
   - Email válido (formato: usuario@dominio.com)
   - Contraseña mínimo 6 caracteres
   - Confirmar contraseña (debe coincidir)
3. **Enviar** para procesar el login


### Estructura del código
- **`src/js/modules/`**: Módulos especializados (validación, UI, storage)
- **`src/css/`**: CSS modular con variables
- **`config/`**: Configuraciones del proyecto

### Personalizar
- **Colores**: Editar variables CSS en `src/css/style.css`
- **Validaciones**: Modificar `src/js/modules/validation.js`
- **Configuración**: Ajustar `config/dev.config.js`

## Validaciones incluidas

- ✅ Formato de email válido
- ✅ Contraseña mínimo 6 caracteres
- ✅ Coincidencia de contraseñas
- ✅ Campos requeridos
- ✅ Feedback visual en tiempo real

## Datos guardados

El formulario guarda en `localStorage`:
- Email del usuario
- Datos completos con timestamp
- Configuraciones de sesión


### Modificar validaciones
```javascript
// En src/js/utils/constants.js
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,  // Cambiar mínimo de contraseña
  EMAIL_REGEX: /tu-regex/  // Personalizar validación de email
};
```
