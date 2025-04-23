import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Login, Registration, Home, Leads, Profile } from './pages'
import { GobalStyle } from './styles'
import { AppThemeProvider } from './context/AppThemeContext'
import { Provider } from 'react-redux'
import store from './redux/index.ts'

const ProtectedRoute = () => {
  const checkAuthCookie = Cookies.get('Authorization')
  if (!checkAuthCookie) {
    alert('Autenticação necessária')
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

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
    element: <ProtectedRoute />,
    children: [
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GobalStyle />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)
