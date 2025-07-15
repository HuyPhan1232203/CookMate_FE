import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: {}, // { userId: [recipe, ...] }
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (Array.isArray(state.favorites)) state.favorites = {};
      const { userId, recipe } = action.payload;
      if (!state.favorites[userId]) state.favorites[userId] = [];
      if (!state.favorites[userId].find((item) => item.id === recipe.id)) {
        state.favorites[userId].push(recipe);
      }
    },
    removeFavorite: (state, action) => {
      if (Array.isArray(state.favorites)) state.favorites = {};
      const { userId, recipeId } = action.payload;
      if (state.favorites[userId]) {
        state.favorites[userId] = state.favorites[userId].filter(
          (item) => item.id !== recipeId
        );
      }
    },
    setFavorites: (state, action) => {
      if (Array.isArray(state.favorites)) state.favorites = {};
      const { userId, favorites } = action.payload;
      state.favorites[userId] = Array.isArray(favorites) ? favorites : [];
    },
    clearFavorites: (state, action) => {
      if (Array.isArray(state.favorites)) state.favorites = {};
      const { userId } = action.payload;
      state.favorites[userId] = [];
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites, clearFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
