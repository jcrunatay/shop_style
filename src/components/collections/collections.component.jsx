import "./collections.styles.scss";
const Collections = () => (
    <section id="collections">
        <h3 className="collections-title">Collections</h3>
        <div className="collection-container">
            <a href="/" className="collection-link">
                <div className="collection1 collection">
                    <p className="collection-name">Women’s Clothing</p>
                    <p className="collection-description">
                        Dress up in elegance with our extensive range of dresses, tops, and skirts
                        that are perfect for any occasion.
                    </p>
                </div>
            </a>
            <a href="/" className="collection-link">
                <div className="collection2 collection">
                    <p className="collection-name">Men’s Clothing</p>
                    <p className="collection-description">
                        From formal suits that make an impression to casual wear that comforts, find
                        your unique style statement here.
                    </p>
                </div>
            </a>
            <a href="/" className="collection-link">
                <div className="collection3 collection">
                    <p className="collection-name">Jewelry</p>
                    <p className="collection-description">
                        Add a sparkle to your everyday look with our exquisite collection of
                        jewelry. Choose from classic pieces to contemporary designs that suit your
                        style.
                    </p>
                </div>
            </a>
            <a href="/" className="collection-link">
                <div className="collection4 collection">
                    <p className="collection-name">Electronics</p>
                    <p className="collection-description">
                        Stay up-to-date with the latest gadgets and tech essentials that are a must
                        for your digital lifestyle.
                    </p>
                </div>
            </a>
        </div>
    </section>
);

export default Collections;
