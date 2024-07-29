import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./mobile-checkout-item.styles.scss";

const MobileCheckoutItem = ({ product }) => {
    const { removeItemFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);
    const { title, price, image, quantity } = product;
    const total = (quantity * price).toFixed(2);

    const increaseProductQuantityHandler = () => increaseQuantity(product);
    const decreaseProductQuantityHandler = () => decreaseQuantity(product);
    const removeItemFromCartHandler = () => removeItemFromCart(product);

    return (
        <div className="checkout-item">
            <div className="checkout-item-image-container">
                <img className="product-image" src={image} alt={title} />
            </div>
            <div className="checkout-item-info">
                <p className="product-name">{title}</p>
                <div className="price-quantity-container">
                    <span className="price">{price}</span>
                    <span className="quantity-modifier-container">
                        <span onClick={decreaseProductQuantityHandler} className="less">
                            &#8211;
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span onClick={increaseProductQuantityHandler} className="add">
                            +
                        </span>
                    </span>
                </div>
                <div className="total-remove-container">
                    <span className="order-total">Total: ${total}</span>
                    <span onClick={removeItemFromCartHandler} className="remove">
                        ✖
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MobileCheckoutItem;
