import { createContext, useState } from "react";


export const FavoritesContext = createContext({
  ids:[],
  addFavorite: (id) => {},
  removeFavortie: (id) => {}
})

export function FavoritesContextProvider({children}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((prevState) => [...prevState, id])
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds((prevState) => prevState.filter((mealId) => mealId !== id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }
  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}