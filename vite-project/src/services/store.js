import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// a global state that saves the information of our app
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
