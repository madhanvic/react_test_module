import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import apiSlice from "./api";

export default configureStore({
  reducer: {
    notes: notesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
