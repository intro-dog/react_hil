import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAllPizzas = createAsyncThunk("pizza/getAllPizzas", async () => {
  const response = await fetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  )
  const data = await response.json()
  console.log("data", data)
  return data.data
})

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPizzas.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllPizzas.fulfilled, (state, action) => {
      state.isLoading = false
      state.pizzas = action.payload
    })
    builder.addCase(getAllPizzas.rejected, (state) => {
      state.isLoading = false
      state.error = "Something went wrong"
    })
  },
})

export default pizzaSlice.reducer
