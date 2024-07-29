import ExpandedCollection from "../expanded-collection/expanded-collection.component";
import ProductCollectionTitleAndDescription from "../../product-category-description";
import "./expanded-collections.styles.scss";

const ExpandedCollections = () => {
    const ProductCollectionMap = ProductCollectionTitleAndDescription.map((category, index) => {
        return (
            <ExpandedCollection
                key={category.title}
                title={category.title}
                description={category.description}
                index={index + 1}
            />
        );
    });

    return (
        <section id="expanded-collections">
            <h3 className="collections-title">Collections</h3>

            <div className="expanded-collection-container">{ProductCollectionMap}</div>
        </section>
    );
};

export default ExpandedCollections;
