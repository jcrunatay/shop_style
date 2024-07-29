import { useContext, Fragment } from "react";
import { CartContext } from "../../context/cart.context";

import TableCheckoutItems from "../../components/table-checkout-items/table-checkout-items.component";
import MobileCheckoutItems from "../../components/mobile-checkout-items/mobile-checkout-items.component";
import "./checkout.styles.scss";
const CheckOut = () => {
    const { orderMainTotal, cartItemCount } = useContext(CartContext);

    return (
        <section id="checkout">
            <h2 className="page-title">CHECKOUT</h2>

            {cartItemCount === 0 ? (
                <div className="empty-cart-text-container">
                    <p className="empty-cart-text">Your cart is empty</p>
                </div>
            ) : (
                <Fragment>
                    <div className="table-container">
                        {/* display for desktop version */}
                        <TableCheckoutItems />

                        {/* display for mobile version */}
                        <MobileCheckoutItems />
                    </div>
                    <div className="total-container">
                        <p className="order-total">Order Total: {orderMainTotal}</p>
                        <button className="purchase-btn">Pay Now</button>
                    </div>
                </Fragment>
            )}
        </section>
    );
};

export default CheckOut;
