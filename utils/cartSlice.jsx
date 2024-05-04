import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addCart:(state,action)=>{
          state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const indexToRemove = action.payload;
            state.items.splice(indexToRemove,1);
        },
        clearCart:(state,action)=>{
           state.items.length = 0;
        }
    }
})
export const{addCart,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer