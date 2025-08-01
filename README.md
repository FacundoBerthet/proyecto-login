# 🚀 Proyecto Login Full-Stack

Sistema de autenticación completo para aprender **Spring Boot**, **Angular** y **SQL** a través de un proyecto práctico.

## 🎯 ¿Qué es?

Un proyecto educativo que evoluciona desde un simple formulario frontend hasta una aplicación full-stack completa, perfecto para aprender tecnologías modernas paso a paso.

## 🏗️ Arquitectura

### 📱 Frontend (En progreso)
- **Vanilla JS** → **Angular** (migración planificada)
- Validación en tiempo real
- Diseño responsivo y moderno
- Guards y interceptors para JWT

### 🍃 Backend (En desarrollo) 
- **Spring Boot 3.x** - API REST
- **Spring Security** - JWT Authentication
- **Spring Data JPA** - ORM con Hibernate
- **MySQL/PostgreSQL** - Base de datos

### 🗄️ Base de Datos
- Diseño relacional con usuarios, roles y permisos
- Migraciones con Flyway
- Stored procedures (opcional)

## 🛠️ Tecnologías de Aprendizaje

### Backend
- Java 17+, Spring Boot, Spring Security
- JPA/Hibernate, Maven, JWT
- Testing con JUnit y Mockito

### Frontend (Actual)
- HTML5, CSS3, JavaScript ES6+
- Módulos, LocalStorage, Validaciones

### Frontend (Futuro)
- Angular 17+, TypeScript, RxJS
- Angular Material, Guards, Interceptors

## 📁 Nueva Estructura

```
proyecto-login/
├── frontend/            # Cliente Angular (futuro)
├── backend/            # API Spring Boot 🍃
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
├── database/           # Scripts SQL y migraciones
├── docs/              # Documentación del proyecto
│   └── BACKEND_ROADMAP.md
├── src/               # Frontend actual (Vanilla JS)
│   ├── js/           # JavaScript modular
│   └── css/          # CSS organizado  
├── public/
│   └── index.html    # Página principal actual
└── config/           # Configuraciones
```

## 🎓 Hoja de Ruta de Aprendizaje

### 🔄 Estado Actual: Backend Development
- ✅ Setup inicial y planificación
- 🔄 **Fase 1**: Configuración Spring Boot
- ⏳ Fase 2: Modelado JPA
- ⏳ Fase 3: API REST
- ⏳ Fase 4: Autenticación JWT
- ⏳ Fase 5: Autorización y roles
- ⏳ Fase 6: Testing y documentación

👉 **Consulta el [roadmap detallado](docs/BACKEND_ROADMAP.md)** para seguir el progreso

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
