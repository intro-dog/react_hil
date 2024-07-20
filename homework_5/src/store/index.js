import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/CartSlice/index"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export default store
