import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (id) => {
  const response = await fetch(
    `https://react-fast-pizza-api.onrender.com/api/order/${id}`
  )
  if (!response.ok) {
    throw new Error("Error fetching order")
  }
  const data = await response.json()
  return data.data
})

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.order = action.payload
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default orderSlice.reducer
