import { Link } from "react-router-dom";
import "./expanded-collection.styles.scss";
const ExpandedCollection = ({ title, description, index }) => {
    //check if the title is 2 words to work with the vertical placement

    const splittedTitle = title.split(" ");

    return (
        <Link to={`products/${title}`} className="collection-category-link">
            <div className={`collection-category collection${index}`}>
                <p className="expanded-collection-category-title">{title}</p>

                {splittedTitle.length === 1 ? (
                    <p className="vertical-collection-category-title">{title}</p>
                ) : (
                    <p className="vertical-collection-category-title">
                        {splittedTitle[0]}
                        <br />
                        <span>{splittedTitle[1]}</span>
                    </p>
                )}
                <p className="collection-category-description">{description}</p>
            </div>
        </Link>
    );
};

export default ExpandedCollection;
