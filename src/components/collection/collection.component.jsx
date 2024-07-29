import { Link } from "react-router-dom";
import "./collection.styles.scss";

const Collection = ({ title, description, index, renderedInProductsComponent }) => {
    return (
        <Link
            to={`${renderedInProductsComponent ? title : `products/${title}`}`}
            className="collection-link"
        >
            <div className={`collection  collection${index + 1}`}>
                <p className="collection-name">{title}</p>
                <p className="collection-description">{description}</p>
            </div>
        </Link>
    );
};

export default Collection;
