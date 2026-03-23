import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItems, CartQty } from "../../types/product.types";

const initialState : CartItems = {
    allCarts : []
}

export const cartSlice = createSlice({
     name: 'allCarts',
    initialState,
    reducers:{
        setCarts: (state, action : PayloadAction<CartQty[]>)=>{
            // console.log(action.payload)
            state.allCarts = action.payload;
        },
        updateQty : (state, action) =>{
            if(action.payload.status == "increase"){
                state.allCarts.filter(data => data.id == action.payload.id)[0].qty +=1
            }else{
                // if(state.allCarts.filter(data => data.id == action.payload.id)[0].qty <=1){
                //     // state.allCarts = state.allCarts.filter(data => data.id !== action.payload.id)

                // }else{
                    state.allCarts.filter(data => data.id == action.payload.id)[0].qty -=1
                // }
            }
        },
        removeFromCart : (state, action) =>{
            // if(state.allCarts)
            state.allCarts = state.allCarts.filter(data => data.id !== action.payload.id)
        }
    // setPageNum : (state, action)=>{
    //     state.page = action.payload
    // }
}
})

export const {setCarts, updateQty, removeFromCart} = cartSlice.actions; 
export default cartSlice.reducer;