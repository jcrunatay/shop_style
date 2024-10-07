// ==== FILE NO LONGER USED BUT SAVED FOR REFERENCE ====

import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setCartItems = (cartItems) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const increaseQuantity = (cartItems, productToIncreaseQuantity) => {
    const newCartItems = increaseProductQuantity(cartItems, productToIncreaseQuantity);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseQuantity = (cartItems, productToDecreaseQuantity) => {
    const newCartItems = decreaseProductQuantity(cartItems, productToDecreaseQuantity);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = removeCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
