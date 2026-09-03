import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { applyTheme } from './utils/theme'

// initialize theme before React mounts
try{
  applyTheme('dark')
}catch(e){/* ignore */}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
