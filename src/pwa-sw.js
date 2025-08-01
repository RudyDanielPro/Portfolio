// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registrado con éxito:', registration.scope);
        
        // Verificar actualizaciones periódicamente
        setInterval(() => registration.update(), 12 * 60 * 60 * 1000);
      })
      .catch(error => {
        console.error('Error al registrar ServiceWorker:', error);
      });
  });

  // Recargar cuando haya una nueva versión
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}