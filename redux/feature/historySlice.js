import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: {}, // { userId: [recipe, ...] }
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const { userId, recipe } = action.payload;
      if (!state.history[userId]) state.history[userId] = [];
      // Xóa nếu đã có, rồi thêm lên đầu (giống recent)
      state.history[userId] = state.history[userId].filter(
        (item) => item.id !== recipe.id
      );
      state.history[userId].unshift(recipe);
      // Giới hạn tối đa 50 mục
      if (state.history[userId].length > 50) state.history[userId].length = 50;
    },
    clearHistory: (state, action) => {
      const { userId } = action.payload;
      state.history[userId] = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
