import  React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'

const root=createRoot(document.getElementById('root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration.scope)
      })
      .catch(error => {
        console.log('Error al registrar el Service Worker:', error)
      })
  })
}
  root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  )
