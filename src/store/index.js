import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice"
import { persistStore } from "redux-persist"
export const persistor = persistStore(configureStore({
    reducer: {
      user: userSlice
    }
})) 
export default configureStore({
  reducer: {
      user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})