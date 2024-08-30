import { createSelector } from "reselect";

const selectCartreducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartreducer], (cart) => cart.cartItems);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0).toFixed(2)
);
