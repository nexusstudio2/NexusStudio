import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Tarjeta.jsx'
import './tarjeta.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta />
  </StrictMode>
)
