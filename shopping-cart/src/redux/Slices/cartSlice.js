import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart_items : []
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        add_to_cart: (state,action) => {
            state.cart_items.push(action.payload);
        },
        remove_from_cart: (state,action) => {
            state.cart_items = state.cart_items.filter((item) => item.id !== action.payload)
        }
    }
})

export const {add_to_cart, remove_from_cart} = cartSlice.actions
export default cartSlice.reducer