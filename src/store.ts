import { configureStore } from "@reduxjs/toolkit";
import { root } from "./services/root";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [root.reducerPath]: root.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(root.middleware),
});

setupListeners(store.dispatch)
