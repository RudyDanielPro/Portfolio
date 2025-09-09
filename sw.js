// sw.js
const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  "../assets/Foto.mp4",
  '../assets/Bibliographic Manager.png',
  '../assets/Medical consultation platform.png',
  '../assets/Portfolio.png',
  '../assets/Space ship game.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalándose');
  
  // Esperar hasta que el cache esté listo
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('Error al abrir el cache:', error);
      })
  );
});

// Interceptar solicitudes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver el recurso desde cache si está disponible
        if (response) {
          return response;
        }
        
        // Si no está en cache, hacer la solicitud a la red
        return fetch(event.request)
          .then(response => {
            // Verificar que la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta
            const responseToCache = response.clone();
            
            // Almacenar en cache para futuras solicitudes
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(error => {
            console.log('Error en la solicitud:', error);
            // Puedes devolver una página de respaldo aquí si lo deseas
          });
      })
  );
});

// Activar el Service Worker y limpiar caches antiguos
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});