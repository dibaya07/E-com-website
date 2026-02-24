import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Products, ProductState } from '@/app/types/product.types';

const initialState : ProductState  = {
    allProducts : []
}

export const productSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers:{
        setProducts: (state, action : PayloadAction<Products[]>)=>{
            state.allProducts = action.payload;
    }
}
})


export const {setProducts} = productSlice.actions; 
export default productSlice.reducer;