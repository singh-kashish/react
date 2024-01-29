import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems:[],
        // design of cartItems is to include an cartItemsObject which will have 1 object as item and 2nd one as quantity.
    },
    reducers:{
        addToCart(state,action){ 
            // If item is present in cart, increase the object's quantity property else push it to cartItems with quantity 1
            let targetItem = state.cartItems.find(obj=>obj.item.id===action.payload.id);
            if(targetItem) {
                const indexOfToUpdateElement=state.cartItems.indexOf(targetItem);
                state.cartItems[indexOfToUpdateElement] = {...targetItem,quantity:targetItem.quantity+1};
            } else {
                state.cartItems.push({item: action.payload, quantity: 1});
            }
            },
        clearCart(state){
            state.cartItems=[];
        },
        removeItemFromCart(state,action){
            // If quantify of item is 1 then remove the item else decrease it's quantity
            let targetItem = state.cartItems.find(
              (obj) => obj.item.id === action.payload.id
            );
            let indexOfItemInCart =state.cartItems.findIndex(itr=>itr.id===targetItem.id);
            if(targetItem.quantity===1) state.cartItems.splice(indexOfItemInCart,1);
            else state.cartItems[indexOfItemInCart] = {...targetItem,quantity: targetItem.quantity-1}
        }
        },
});
export default cartSlice.reducer;
export const {addToCart, removeItemFromCart, clearCart} = cartSlice.actions;