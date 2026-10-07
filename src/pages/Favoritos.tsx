import { useFavoriteStore } from '../store/useStore'
import ProtectRoute from '../components/ProtectRoute'
import Product from '../components/ProductCard'
import {fetchFavoritesProducts} from '../services/product'
import {useQuery} from '@tanstack/react-query'
import ErrorPage from './Error';
import LoadingPage from './LoadingPage';

export default function Favorites() {
  const favoritesIds = useFavoriteStore(state => state.favorites)
  const {data: favorites, isPending, isError} = useQuery({
    queryKey: ['favorites', favoritesIds],
    queryFn: () => fetchFavoritesProducts(favoritesIds)
  })

  return (
    <ProtectRoute>
      <div>
        <main className="px-8 py-6 bg-gray-100 min-h-screen">
          {isPending && <LoadingPage />}
          {isError && <ErrorPage />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites?.map(favorite => {
              const { id, title, description, price, rating, thumbnail } = favorite;
              const p = { id, title, description, price, rating, thumbnail };
              return <Product key={id} product={p} />;
            })}
          </div>
        </main>
      </div>
    </ProtectRoute>
  )
}