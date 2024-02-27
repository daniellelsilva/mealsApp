import { createContext } from "react";


export const FavoritesContext = createContext({
  ids:[],
  addFavorite: (id) => {},
  removeFavortie: (id) => {}
})

export function FavoritesContextProvider({children}) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}