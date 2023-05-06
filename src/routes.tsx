import Error from 'pages/error/error_reg'
import Login from 'pages/login'
import MainRoom from 'pages/mainroom'
import Registration from 'pages/registration'
import Success from 'pages/success'

export const routes = [
  {
    path: '/*',
    element: <Login />,
  },
  {
    path: '/room',
    element: <MainRoom />,
  },
  {
    path: '/excelent',
    element: <Success />,
  },
  {
    path: '/reg',
    element: <Registration />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]
