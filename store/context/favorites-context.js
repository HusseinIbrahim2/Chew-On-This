import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite : (id) => {},
});

function FavoriteContextProvider ({children}) {
    const [favoriteMealId,setFavoriteMealId] = useState([]);

    function addFavorite(id) {
        setFavoriteMealId((currentMealFav) => [...currentMealFav , id] )
    }

    function removeFavorite(id) {
        setFavoriteMealId((currentMealFav) =>
         currentMealFav.filter((mealId) => mealId != id))
    }

    const value = {
        ids : favoriteMealId,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite,
    };

<FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
}

export default FavoriteContextProvider;