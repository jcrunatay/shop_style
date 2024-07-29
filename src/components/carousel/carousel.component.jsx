import ProductCard from "../../components/product-card/product-card.component";
import Slider from "react-slick";

import { ReactComponent as LeftCaret } from "./../../assets/caret-left-sm-svgrepo-com.svg";
import { ReactComponent as RightCaret } from "./../../assets/caret-right-sm-svgrepo-com.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.styles.scss";

const MultiProductCarousel = ({ productsByCategory }) => {
    const NextArrow = (props) => {
        return (
            <button className="next-arrow">
                <RightCaret className="icon" onClick={props.onClick} />
            </button>
        );
    };

    const PrevArrow = (props) => {
        return (
            <button className="prev-arrow" onClick={props.onClick}>
                <LeftCaret className="icon" onClick={props.onClick} />
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 675,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const productsByCategoryMap = productsByCategory.map((product) => {
        return <ProductCard key={product.id} product={product} />;
    });

    return (
        <div className="slider-container">
            <Slider {...settings}>{productsByCategoryMap}</Slider>
        </div>
    );
};

export default MultiProductCarousel;
