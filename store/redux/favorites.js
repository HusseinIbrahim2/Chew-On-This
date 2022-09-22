import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorited',
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorites : (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavorites: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id) ,1)
        },
    },
})

export const addFavorites = favoritesSlice.actions.addFavorites;
export const removeFavorites = favoritesSlice.actions.removeFavorites;

export default favoritesSlice.reducer;
