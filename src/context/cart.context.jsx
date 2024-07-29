import { createContext, useState, useEffect } from "react";

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
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0,
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    removeItemFromCart: () => {},
    orderMainTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [orderMainTotal, setOrderMainTotal] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        //set the checkout items count
        setCartItemCount(count);

        const total = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );
        //set the main total of all the order
        setOrderMainTotal(total.toFixed(2));
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const increaseQuantity = (product) => {
        setCartItems(increaseProductQuantity(cartItems, product));
    };

    const decreaseQuantity = (product) => {
        setCartItems(decreaseProductQuantity(cartItems, product));
    };

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
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
