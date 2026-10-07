import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../pages/Main'
import ProductList from '../pages/ProductList'
import Favoritos from '../pages/Favoritos';
import ErrorPage from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/main',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'products', element: <ProductList /> },
      { path: 'favorites', element: <Favoritos /> },
    ]
  }
])

export default router;