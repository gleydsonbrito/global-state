import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IFavoriteState {
  favorites: number[]
}

interface IFavoriteActions {
  addFavorite: (id: number) => void,
  removeFavorite: (id: number) => void
}

type FavoriteStore = IFavoriteActions & IFavoriteState

export const useFavoriteStore = create<FavoriteStore>()(
  persist((set) => ({
    favorites: [],
    addFavorite: (id) =>
      set((state) => {
        const exists = state.favorites.includes(id)
        if (exists) return state

        return { favorites: [...state.favorites, id] }
      }),
    removeFavorite: (id) =>
      set((state) => {
        const exists = state.favorites.includes(id)
        if (!exists) return state
        const filteredFavorites = state.favorites.filter(f => f !== id)
        return { favorites: [...filteredFavorites] }
      })
  }),
    {
      name: "favorite-storage", // 3. Nome da chave que aparecerá no LocalStorage do navegador
    }
))