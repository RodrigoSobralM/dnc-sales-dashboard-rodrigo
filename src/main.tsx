import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>LOGIN</div>,
  },
  {
    path: '/cadastro',
    element: <div>CADASTRO</div>,
  },
  {
    path: '/home',
    element: <div>HOME</div>,
  },
  {
    path: '/leads',
    element: <div>LEADS</div>,
  },
  {
    path: '/perfil',
    element: <div>PERFIL</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
