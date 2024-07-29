import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import "./product-cards.styles.scss";

const ProductCards = () => {
    const { category } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);

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
                setProductsByCategory(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]);

    const productsByCategoryMap = productsByCategory.map((product) => {
        return <ProductCard key={product.id} product={product} />;
    });

    return (
        <section id="single-collection-products">
            <h2 className="collection-name">{category}</h2>
            <div className="cards-container">{productsByCategoryMap}</div>
        </section>
    );
};

export default ProductCards;
