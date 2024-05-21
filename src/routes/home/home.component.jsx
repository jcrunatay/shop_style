import { useState, useEffect } from "react";

import Collections from "../../components/collections/collections.component";
import ExpandedCollection from "../../components/expanded-collections/expanded-collections.component";

import shopstylevideo from "../../assets/hero-video.mp4";
import "./home.styles.scss";
const Home = () => {
    //use screenwidth for the id ref of shop now button
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="homepage">
            <div className="video-container">
                <div className="intro-context-in-video">
                    <h1 className="intro-title">Discover the Latest Trends</h1>
                    <p className="intro-text">
                        Welcome to our exclusive collection of trendy apparel and accessories,
                        carefully curated to keep you stylish and on-trend all year round. Discover
                        the latest trends, mix and match styles, and create the perfect look for any
                        occasion. Step into a world of fashion and discover endless possibilities
                        with our carefully selected pieces. Elevate your style, elevate your
                        wardrobe, and elevate your confidence with our collection.
                    </p>
                    <a
                        href={`${screenWidth < 1024 ? "#collections" : "#expanded-collections"}`}
                        className="shop-now-button"
                    >
                        Shop Now
                    </a>
                </div>
                <video style={{ width: "100%" }} src={shopstylevideo} loop muted autoPlay>
                    Your browser does not support the video tag.
                </video>
            </div>
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
            <ExpandedCollection />
        </section>
    );
};

export default Home;
