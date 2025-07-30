// Configuración para desarrollo
export const devConfig = {
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    host: 'localhost',
    open: true
  },
  
  // Configuración de debugging
  debug: {
    enabled: true,
    logLevel: 'info',
    showValidationLogs: true
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Proyecto Login - Dev',
    version: '2.0.0',
    environment: 'development'
  },
  
  // URLs de desarrollo (para futuras integraciones)
  api: {
    baseUrl: 'http://localhost:3001/api',
    timeout: 5000
  }
};
