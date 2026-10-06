import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import ProductList from '../pages/ProductList'
import Favoritos from '../pages/Favoritos';

const router  = createBrowserRouter([
  {path:'/', element: <App/>},
  {path: '/products', element: <ProductList /> },
  {path: '/favorites', element: <Favoritos />}
])

export default router;