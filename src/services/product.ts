import type IProduct from '../interfaces/types'

interface ProductsResponse {
products: IProduct[],
total: number,
skip: number,
limit: number
}

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch('https://dummyjson.com/products')
  if(!response.ok) throw new Error('Erro ao buscar os produtos.')
  const responseAPI: ProductsResponse = await response.json()
  return responseAPI.products
}


export async function fetchFavoritesProducts(favoritesIDs: number[])  {
  const favorites: IProduct[] = await Promise.all(
    favoritesIDs.map(async (id: number) => {
      const response = await fetch(`https://dummyjson.com/product/${id}`)
      if(!response.ok) throw new Error(`Erro ao consultar o produto ${id}`)
      return response.json() as Promise<IProduct>
    })
  )
  return favorites
}