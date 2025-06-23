import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.favorites = action.payload.favorites || [];
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.favorites = [];
    },
    toggleFavorite: (state, action) => {
      const recipeId = action.payload;
      const index = state.favorites.indexOf(recipeId);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(recipeId);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading, setError, toggleFavorite } =
  userSlice.actions;
export default userSlice.reducer;
