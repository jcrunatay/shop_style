import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

/* import { useContext } from "react";
import { CartContext } from "../../context/cart.context"; */
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(product));

    const navigate = useNavigate();
    const { category } = useParams();
    const { id, title, price, description, image } = product;

    const redirectUserToSingleProductPage = () => {
        navigate(`/products/${category}/${id}`);
    };

    return (
        <div className="card">
            <div className="card-upper-content">
                <img loading="lazy" src={image} alt={title} />
            </div>
            <div className="card-lower-content">
                <div className="product-info-container">
                    <span className="product-name">{title}</span>
                    <span className="product-description">{description}</span>
                    <span className="product-price">${price}</span>
                </div>
                <div className="btns-container">
                    <button className="add-to-cart" onClick={addProductToCart}>
                        Add to Cart
                    </button>
                    <button className="view-item" onClick={redirectUserToSingleProductPage}>
                        View Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
