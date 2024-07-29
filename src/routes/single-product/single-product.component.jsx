import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

import MultiProductCarousel from "../../components/carousel/carousel.component";

import "./single-product.styles.scss";

const SingleProduct = () => {
    const { id, category } = useParams();
    const [product, setProduct] = useState({});
    const [productsByCategory, setProductsByCategory] = useState([]);
    const { title, price, description, image } = product;

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    //get product by id
    useEffect(() => {
        const getSingleProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!response.ok) {
                throw new Error("Network Error");
            }

            const data = await response.json();
            setProduct(data);
        };

        getSingleProduct();
    }, [id]);

    //get other related products based on the user's selection .. then display it in carousel
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                //match the url in the API it is jewelery in the aPi in fakeStore
                const categoryToFetch = category === "jewelry" ? "jewelery" : category;
                const API = `https://fakestoreapi.com/products/category/${categoryToFetch}`;
                const response = await fetch(`${API}`);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                //convert id for usePArams cuz it returns string
                const filteredProducts = data.filter((product) => product.id !== Number(id));
                setProductsByCategory(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category, id]);

    return (
        <div id="single-product-page">
            <h3 className="product-title">{title}</h3>
            <div className="product-content">
                <div className="product-image-container">
                    <img className="product-image" src={image} alt="product" />
                </div>
                <div className="product-information">
                    <p className="product-description">{description}</p>
                    <p className="product-price">${price}</p>
                    <button onClick={addProductToCart} className="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="recommendation-container">
                <h3>Inspired by Your Selection:</h3>
                <MultiProductCarousel productsByCategory={productsByCategory} />
            </div>
        </div>
    );
};

export default SingleProduct;
