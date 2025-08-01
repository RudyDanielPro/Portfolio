import  React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import './pwa-sw';

const root=createRoot(document.getElementById('root'))

  root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  )
