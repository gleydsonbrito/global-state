import ProtectRoute from '../components/ProtectRoute'
import Product from '../components/ProductCard'
import { useQuery } from '@tanstack/react-query';
import {fetchProducts} from '../services/product'
import LoadingPage from './LoadingPage';
import ErrorPage from './Error';


export default function ProductList() {
  const {data: products, isPending, isError} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })
  return (
    <ProtectRoute>
      <div>
        <main className="px-8 py-6 bg-gray-100 min-h-screen">
          {isPending && <LoadingPage />}
          {isError && <ErrorPage />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map(product => {
              const { id, title, description, price, rating, thumbnail } = product;
              const p = { id, title, description, price, rating, thumbnail };
              return <Product key={id} product={p} />;
            })}
          </div>
        </main>
      </div>
    </ProtectRoute>
  )
}