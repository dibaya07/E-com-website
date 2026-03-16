import { cartItems } from "@/app/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { json } from "stream/consumers";

const initialState : cartItems = {
    allCarts : []
}

export const cartSlice = createSlice({
     name: 'allCarts',
    initialState,
    reducers:{
        setCarts: (state, action : PayloadAction<string[]>)=>{
            state.allCarts = action.payload;
    },
    // setPageNum : (state, action)=>{
    //     state.page = action.payload
    // }
}
})

export const {setCarts} = cartSlice.actions; 
export default cartSlice.reducer;