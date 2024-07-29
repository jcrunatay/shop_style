import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./table-checkout-item.styles.scss";

const TableCheckoutItem = ({ product }) => {
    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useContext(CartContext);

    const { title, price, image, quantity } = product;
    const total = (quantity * price).toFixed(2);

    const increaseProductQuantityHandler = () => increaseQuantity(product);
    const decreaseProductQuantityHandler = () => decreaseQuantity(product);
    const removeItemFromCartHandler = () => removeItemFromCart(product);
    return (
        <tr>
            <td>
                <img className="product-image" src={image} alt={title} />
            </td>
            <td>{title}</td>
            <td>
                <span onClick={decreaseProductQuantityHandler} className="decrease-quantity">
                    -
                </span>{" "}
                {quantity}
                <span onClick={increaseProductQuantityHandler} className="increase-quantity">
                    +
                </span>
            </td>
            <td>${price}</td>
            <td>${total}</td>
            <td>
                <span onClick={removeItemFromCartHandler} className="remove-checkout-item">
                    ✖
                </span>
            </td>
        </tr>
    );
};

export default TableCheckoutItem;
