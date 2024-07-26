import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/CartSlice/index"
import OrderReducer from "./slices/OrderSlice"
import pizzaReducer from "./slices/PizzaSlice/index"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    pizza: pizzaReducer,
    order: OrderReducer,
  },
})

export default store
