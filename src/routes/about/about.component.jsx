import { Link } from "react-router-dom";
import "./about.styles.scss";
import aboutImg from "../../assets/about-us-2.jpeg";
const About = () => {
    return (
        <section id="about-us-section" className="page-last-section">
            <h2 className="page-title">ABOUT US</h2>
            <div className="about-us-content-container">
                <div className="about-image-container">
                    <img className="about-image" src={aboutImg} alt="About Shopstyle Img" />
                </div>
                <div className="about-us-context">
                    <h3 className="about-us-heading">Discover ShopStyle</h3>
                    <p className="about-us-description">
                        Welcome to Shopstyle, your ultimate destination for exquisite jewelry,
                        trendy men's and women's clothing, and cutting-edge electronics. Founded in
                        2018, Shopstyle has grown from a small boutique to a global brand, offering
                        a curated selection of high-quality products designed to enhance your
                        lifestyle. Our jewelry collection features exquisite pieces crafted with
                        precision and care, from elegant necklaces to dazzling earrings. Explore the
                        latest trends in men's and women's fashion with our clothing range, offering
                        everything from casual everyday wear to sophisticated evening attire. Stay
                        connected with our range of cutting-edge electronics, including smartphones,
                        tablets, and smartwatches. At Shopstyle, we believe that style is more than
                        just what you wear; it's a lifestyle. Our mission is to empower individuals
                        to express their unique style through our carefully curated collections.
                        With a commitment to exceptional customer service and a dedication to
                        community involvement, Shopstyle is your go-to destination for all things
                        stylish and innovative.
                    </p>
                </div>
            </div>
            <Link to="/products">
                Dive into Our Collection <span className="right-arrow">→</span>{" "}
            </Link>
        </section>
    );
};
export default About;
