import ProtectRoute from '../components/ProtectRoute'
import Product from '../components/ProductCard'
import { useEffect, useState } from 'react';
import type IProduct from '../interfaces/types'


interface ProductsResponse {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}

export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    let ativo = true
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) throw new Error('Erro na requisição')

        const APIResponse: ProductsResponse = await response.json()
        if (ativo) setProducts(APIResponse.products)

      } catch (err) {
        console.log('Erro', err)
      }
    }
    fetchProducts()

    return () => {
      ativo = false
    }
  }, [])
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