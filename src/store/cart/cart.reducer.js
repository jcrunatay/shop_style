import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
    const productToAddExist = cartItems.find((cartItem) => productToAdd.id === cartItem.id);

    //if product exist already then change in the cart item the quantity of the product being added
    if (productToAddExist) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    //if it doesn't exist then just add a new product and set quantity to 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseProductQuantity = (cartItems, productToIncreaseQuantity) => {
    return cartItems.map((cartItem) =>
        cartItem.id === productToIncreaseQuantity.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
    );
};

const decreaseProductQuantity = (cartItems, productToDecreaseQuantity) => {
    //if the quantity is 1 .. remove the cartItem from cartItems after decreasing its quantity ..

    if (productToDecreaseQuantity.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToDecreaseQuantity.id);
    }

    //if the quantity is more than  1 .. then just decrease 1 from its quantity
    return cartItems.map((cartItem) =>
        cartItem.id === productToDecreaseQuantity.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const CART_INITIAL_STATE = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        increaseQuantity(state, action) {
            state.cartItems = increaseProductQuantity(state.cartItems, action.payload);
        },
        decreaseQuantity(state, action) {
            state.cartItems = decreaseProductQuantity(state.cartItems, action.payload);
        },
    },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
