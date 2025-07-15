import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./feature/userSlice";
import recipeReducer from "./feature/recipeSlice";
import favoriteReducer from "./feature/favoriteSlice";
import historyReducer from "./feature/historySlice";

const persistConfig = {
  key: "roots",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
  favorite: favoriteReducer,
  history: historyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
