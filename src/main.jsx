import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

const root = createRoot(document.getElementById('root'))

// Función para registrar el Service Worker
const registerServiceWorker = () => {
  // Verificar que estamos en un entorno de producción
  if (process.env.NODE_ENV !== 'production') {
    console.log('Service Worker no registrado en desarrollo');
    return;
  }

  // Verificar que el navegador soporta Service Workers
  if (!('serviceWorker' in navigator)) {
    console.log('Este navegador no soporta Service Workers');
    return;
  }

  window.addEventListener('load', () => {
    // Verificar que el archivo sw.js existe antes de registrarlo
    fetch('/sw.js')
      .then(response => {
        if (response.status === 200) {
          return navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('Service Worker registrado con éxito:', registration.scope);
              
              // Verificar actualizaciones periódicamente
              setInterval(() => {
                registration.update();
              }, 60 * 60 * 1000); // Cada hora
            })
            .catch(error => {
              console.log('Error al registrar el Service Worker:', error);
            });
        } else {
          console.log('Archivo sw.js no encontrado');
        }
      })
      .catch(error => {
        console.log('Error al verificar el archivo sw.js:', error);
      });
  });
}

// Registrar el Service Worker
registerServiceWorker();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)