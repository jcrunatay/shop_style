import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0,
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    removeItemFromCart: () => {},
    orderMainTotal: 0,
});

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const INITIAL_STATE = {
    cartItems: [],
    cartItemCount: 0,
    orderMainTotal: 0,
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartItems, cartItemCount, orderMainTotal } = state;

    const updateCartItemsReducer = (cartItems) => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        //set the checkout items count

        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );

        const payload = {
            cartItems,
            cartItemCount: newCartCount,
            orderMainTotal: newCartTotal.toFixed(2),
        };

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const increaseQuantity = (productToIncreaseQuantity) => {
        const newCartItems = increaseProductQuantity(cartItems, productToIncreaseQuantity);
        updateCartItemsReducer(newCartItems);
    };

    const decreaseQuantity = (productToDecreaseQuantity) => {
        const newCartItems = decreaseProductQuantity(cartItems, productToDecreaseQuantity);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (cartItemToClear) => {
        const newCartItems = removeCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    };

    const value = {
        cartItems,
        addItemToCart,
        cartItemCount,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        orderMainTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
