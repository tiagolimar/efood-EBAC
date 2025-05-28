import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../Types/Produto'

export interface CartState {
  produtos: Produto[];
}

const initialState: CartState = {
    produtos: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Produto>) => {
      state.produtos.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.produtos.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer