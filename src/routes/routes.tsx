import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import ProductList from '../pages/ProductList'
import Favoritos from '../pages/Favoritos';
import ErrorPage from '../pages/Error';

const router  = createBrowserRouter([
  {path:'/', element: <App/>},
  {path: '/products', element: <ProductList /> },
  {path: '/favorites', element: <Favoritos />},
  {path: '*', element: <ErrorPage/>}
])

export default router;