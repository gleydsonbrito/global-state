import { useEffect, useState } from 'react';
import type IProduct from '../interfaces/types'
import {useFavoriteStore} from '../store/useStore'

interface ProductCardProps {
  product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const favorites = useFavoriteStore(state => state.favorites)
  const addFavorite = useFavoriteStore( state => state.addFavorite )
  const removeFavorite = useFavoriteStore( state => state.removeFavorite )

  useEffect(() => {
    if(favorites.includes(product.id)) {
      setFavorite(true)
    }
  }, [favorites])

  const [favorite, setFavorite] = useState<boolean>(false)
  
  function handleFavorite() {
    setFavorite(prev => {
      if(prev) {
        removeFavorite(product.id)
      }else {
        addFavorite(product.id)
      }
      return !prev
    })
  }
  return (
    <div className="w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow transition-transform duration-300 hover:scale-103">
      <div className="relative h-32 w-full bg-gray-50 flex items-center justify-center p-2">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="h-full object-contain"
        />
        <span onClick={handleFavorite} className="cursos-pointer absolute top-2 left-2 bg-amber-100 text-amber-800 text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
          {favorite ? '❤️' : '🩶'}
        </span>
        <span className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
          ★ {product.rating.toFixed(1)}
        </span>
      </div>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-gray-900 font-bold text-xs line-clamp-1 mb-1">
            {product.title}
          </h3>
          <p className="text-gray-600 text-[11px] line-clamp-2 mb-3 leading-tight">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <span className="text-[10px] text-gray-400 block leading-none">Preço</span>
            <span className="text-sm font-extrabold text-[#FFA500]">
              $ {product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-[#FFA500] hover:bg-amber-600 text-white text-[11px] font-medium px-3 py-1.5 rounded-md transition-colors shadow-sm">
            Comprar
          </button>
        </div>

      </div>
    </div>
  );
}