import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastifyProvider } from '../context/ToastifyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastifyProvider>
    <App />
    </ToastifyProvider>
  </React.StrictMode>,
)
