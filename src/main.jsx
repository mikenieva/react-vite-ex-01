import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Contact from './routes/contact.jsx'

const rootArea = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // contactId = /contacts/mike
      // contactId = /contacts/ramiro
      // contactId = /contacts/andrea
      // contactId = /contacts/alguien-en-el-mundo
      {
        path: '/contacts/:contactId',
        element: <Contact />,
      },
      {
        path: '/mike',
        element: <p>Hola soy Mike</p>,
      },
    ],
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
