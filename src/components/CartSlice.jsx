import { createSlice } from "@reduxjs/toolkit";
import { products } from "./Products";
const cartItems=[];
products.map((product)=>cartItems[product.id]=0)
const initialState = {
  cartItems,
  cartCount: 0,
  cartAmount: 0,
};
 
const CartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        // const id=action.payload;
        // state.cartCount=state.cartCount+1;
      state.cartItems[Number(action.payload)] = state.cartItems[Number(action.payload)] + 1;
      state.cartCount = state.cartCount + 1;
      state.cartAmount=state.cartAmount+products[Number(action.payload)].price;
    },
    removeFromCart(state, action) {
      state.cartItems[Number(action.payload)] = state.cartItems[Number(action.payload)] - 1;
      state.cartCount = state.cartCount >0?state.cartCount-1:0;
      state.cartAmount=(state.cartAmount-products[Number(action.payload)].price)>0?state.cartAmount-products[Number(action.payload)].price:0;
    },
  },
});
export const { addToCart, removeFromCart } = CartSlicer.actions;
export default CartSlicer.reducer;
