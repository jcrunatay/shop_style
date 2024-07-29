import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import MobileCheckoutItem from "../mobile-checkout-item/mobile-checkout-item.component";

import "./mobile-checkout-items.styles.scss";

const MobileCheckoutItems = () => {
    const { cartItems } = useContext(CartContext);

    const checkOutItems = cartItems.map((cartItem) => (
        <MobileCheckoutItem product={cartItem} key={cartItem.id} />
    ));

    return <div className="checkout-items-container-mobile">{checkOutItems}</div>;
};

export default MobileCheckoutItems;
