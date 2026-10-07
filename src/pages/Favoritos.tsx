import { useEffect, useState } from 'react';
import {useFavoriteStore} from '../store/useStore'
import type IProduct from '../interfaces/types'
import ProtectRoute from '../components/ProtectRoute'
import Product from '../components/ProductCard'


export default function Favorites () {
  const favorites = useFavoriteStore(state => state.favorites)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      let ativo = true;
      try {
        const prods = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(`https://dummyjson.com/product/${id}`)
            if(!response.ok) throw new Error('Erro na requisição')
            
            return response.json() as Promise<IProduct>;
          })
        )
        if(ativo) setProducts(prods)
      }catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  }, [favorites])
  
  return (
    <ProtectRoute>
      <div>
        <main className="px-8 py-6 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => {
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