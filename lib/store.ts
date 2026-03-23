import { configureStore } from '@reduxjs/toolkit'
// import productReducer from '../app/features/product/productSlice'
import productReducer from '@/app/(client)/features/product/productSlice'

import cartReducer from '@/app/(client)/features/cart/cartSlice'

export const store = configureStore({
  reducer: {productReducer, cartReducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch