import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rootArea = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/login',
    element: <p>Esta es mi página de inicio de sesión</p>,
  },
  {
    path: '/app',
    element: <App />,
  },
])

ReactDOM.createRoot(rootArea).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
