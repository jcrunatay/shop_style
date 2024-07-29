import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import TableCheckoutItem from "../table-checkout-item/table-checkout-item.component";
import "./table-checkout-items.styles.scss";

const TableCheckoutItems = () => {
    const { cartItems } = useContext(CartContext);

    const checkOutItems = cartItems.map((cartItem) => (
        <TableCheckoutItem product={cartItem} key={cartItem.id} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>{checkOutItems}</tbody>
        </table>
    );
};

export default TableCheckoutItems;
