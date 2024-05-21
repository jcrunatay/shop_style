import "./expanded-collections.styles.scss";

const ExpandedCollection = () => {
    return (
        <section id="expanded-collections">
            <h3 className="collections-title">Collections</h3>

            <div className="expanded-collection-container">
                <a href="/" className="collection-category-link">
                    <div className="collection-category collection1">
                        <p className="expanded-collection-category-title">Women’s Clothing</p>
                        <p className="vertical-collection-category-title">
                            Women’s
                            <br />
                            <span>Clothing</span>
                        </p>
                        <p className="collection-category-description">
                            Dress up in elegance with our extensive range of dresses, tops, and
                            skirts that are perfect for any occasion.
                        </p>
                    </div>
                </a>
                <a href="/" className="collection-category-link">
                    <div className="collection-category collection2">
                        <p className="expanded-collection-category-title">Men’s Clothing</p>
                        <p className="vertical-collection-category-title">
                            Men’s
                            <br />
                            <span>Clothing</span>
                        </p>
                        <p className="collection-category-description">
                            From formal suits that make an impression to casual wear that comforts,
                            find your unique style statement here.
                        </p>
                    </div>
                </a>
                <a href="/" className="collection-category-link">
                    <div className="collection-category collection3">
                        <p className="expanded-collection-category-title">Jewelry</p>
                        <p className="vertical-collection-category-title">Jewelry</p>
                        <p className="collection-category-description">
                            Add a sparkle to your everyday look with our exquisite collection of
                            jewelry. Choose from classic pieces to contemporary designs that suit
                            your style.
                        </p>
                    </div>
                </a>
                <a href="/" className="collection-category-link">
                    <div className="collection-category collection4">
                        <p className="expanded-collection-category-title">Electronics</p>
                        <p className="vertical-collection-category-title">Electronics</p>
                        <p className="collection-category-description">
                            Stay up-to-date with the latest gadgets and tech essentials that are a
                            must for your digital lifestyle.
                        </p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ExpandedCollection;
