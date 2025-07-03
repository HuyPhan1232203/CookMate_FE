import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    list: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
