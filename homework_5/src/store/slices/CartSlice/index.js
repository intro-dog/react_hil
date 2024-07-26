// store/slices/CartSlice/index.js
import { createSlice } from "@reduxjs/toolkit"
import { calculateTotals } from "../../../utils/cartReduceFn.js"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },

  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (itemIndex) {
        state.items[itemIndex].quantity += 1
        state.items[itemIndex].priceOfOnePosition =
          state.items[itemIndex].quantity * state.items[itemIndex].unitPrice
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          priceOfOnePosition: action.payload.unitPrice,
        })
      }
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalPrice = totals.totalPrice
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
        item.priceOfOnePosition = item.quantity * item.unitPrice
      }
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalPrice = totals.totalPrice
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
          item.priceOfOnePosition = item.quantity * item.unitPrice
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalPrice = totals.totalPrice
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalPrice = totals.totalPrice
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalPrice = 0
    },
  },
})

export const {
  addItemToCart,
  increment,
  decrement,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
