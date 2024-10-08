import { useSelector, useDispatch } from "react-redux";
/* import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context"; */

import {
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
} from "../../store/cart/cart.reducer";

import "./table-checkout-item.styles.scss";

const TableCheckoutItem = ({ product }) => {
    const dispatch = useDispatch();

    const { title, price, image, quantity } = product;
    const total = (quantity * price).toFixed(2);

    const increaseProductQuantityHandler = () => dispatch(increaseQuantity(product));
    const decreaseProductQuantityHandler = () => dispatch(decreaseQuantity(product));
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(product));
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
