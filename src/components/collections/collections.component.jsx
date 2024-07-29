import ProductCollectionTitleAndDescription from "../../product-category-description";
import Collection from "../collection/collection.component";

import "./collections.styles.scss";
const Collections = ({ renderedInProductsComponent }) => {
    const ProductCollectionMap = ProductCollectionTitleAndDescription.map((category, index) => {
        return (
            <Collection
                key={category.title}
                title={category.title}
                description={category.description}
                index={index}
                renderedInProductsComponent={renderedInProductsComponent}
            />
        );
    });

    return (
        <section id="collections" className={`${renderedInProductsComponent ? "d-block" : ""}`}>
            <h3 className="collections-title">Collections</h3>
            <div className="collection-container">{ProductCollectionMap}</div>
        </section>
    );
};

export default Collections;
