# 🍃 Backend Spring Boot - Sistema de Login

## 📋 Descripción
API REST desarrollada con Spring Boot para sistema de autenticación y gestión de usuarios.

## 🛠️ Tecnologías Utilizadas
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Security** (JWT)
- **Spring Data JPA**
- **MySQL/PostgreSQL**
- **Maven**

## 🚀 Estado Actual: En Desarrollo

### ✅ Completado
- [ ] Setup inicial del proyecto
- [ ] Configuración de base de datos
- [ ] Entidades JPA
- [ ] Repositorios
- [ ] Controllers básicos
- [ ] Autenticación JWT
- [ ] Autorización por roles
- [ ] Testing
- [ ] Documentación API

## 🏃‍♂️ Cómo Ejecutar (Próximamente)

### Prerrequisitos
```bash
# Java 17+
java -version

# Maven 3.6+
mvn -version

# MySQL/PostgreSQL
# Docker (opcional)
```

### Instalación
```bash
# Clonar el repositorio
git clone <repo-url>
cd proyecto-login/backend

# Instalar dependencias
mvn clean install

# Configurar base de datos
# Copiar application-example.yml a application-dev.yml
# Configurar credenciales de BD

# Ejecutar
mvn spring-boot:run
```

## 📚 Aprendizaje en Progreso

Ver el [roadmap completo](../docs/BACKEND_ROADMAP.md) para seguir el progreso del aprendizaje.

## 🌐 Endpoints (Planificados)

```
POST /api/auth/register     # Registro de usuario
POST /api/auth/login        # Login
POST /api/auth/refresh      # Refresh token
GET  /api/users/me          # Perfil del usuario
PUT  /api/users/me          # Actualizar perfil
GET  /api/admin/users       # Listar usuarios (admin)
```

## 📖 Documentación API
Una vez implementado, la documentación estará disponible en:
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8080/v3/api-docs`
