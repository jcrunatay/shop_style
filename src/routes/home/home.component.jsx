import shopstylevideo from "../../assets/hero-video.mp4";
import "./home.styles.scss";
import Collections from "../../components/collections/collections.component";
const Home = () => {
    return (
        <section className="homepage">
            <video style={{ width: "100%" }} src={shopstylevideo} loop muted autoPlay>
                Your browser does not support the video tag.
            </video>
            <div className="homepage-intro-container">
                <h1 className="intro-title">Discover the Latest Trends</h1>
                {/* <p className="intro-text">
                Explore our exclusive collection of trendy apparel and accessories, curated to keep
                you stylish all year round. From timeless classics to the hottest new arrivals, find
                everything you need to elevate your wardrobe.
            </p> */}
                <p className="intro-text">
                    Welcome to our exclusive collection of trendy apparel and accessories, carefully
                    curated to keep you stylish and on-trend all year round. Discover the latest
                    trends, mix and match styles, and create the perfect look for any occasion. Step
                    into a world of fashion and discover endless possibilities with our carefully
                    selected pieces. Elevate your style, elevate your wardrobe, and elevate your
                    confidence with our collection.
                </p>
                <a href="#collections" className="shop-now-button">
                    Shop Now
                </a>
            </div>
            <Collections />
        </section>
    );
};

export default Home;
