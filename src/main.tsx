import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Registration, Home, Leads, Profile } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Registration />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/leads',
    element: <Leads />,
  },
  {
    path: '/perfil',
    element: <Profile />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
