import Collections from "./../../components/collections/collections.component";
import "./products-collection-preview.styles.scss";

const ProductsCollectionPreview = ({ renderedInProductsComponent }) => {
    return (
        <section id="products">
            <div className="products-context-container">
                <h2 className="page-title">PRODUCTS</h2>
                <h3 className="about-products-heading">What We Offer</h3>
                <p className="about-products-text">
                    At ShopStyle, we believe in providing not just products, but experiences that
                    enhance your lifestyle. Dive into our exclusive collection where every item
                    tells a story of quality and style. Whether you're in search of the latest in
                    tech innovations or the trendiest additions to your wardrobe, our curated
                    selections are designed to cater to every taste and need.
                </p>
            </div>
            <Collections renderedInProductsComponent={renderedInProductsComponent} />
        </section>
    );
};

export default ProductsCollectionPreview;
