import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import MobileMenu from "../../components/mobile-hidden-menu/mobile-hidden-menu.component";
import Footer from "../../components/footer/footer.component";

import { ReactComponent as ShopStyleLogo } from "../../assets/logo-in-svg.svg";
import { ReactComponent as Account } from "../../assets/account.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { ReactComponent as MobileHamrugerMenu } from "../../assets/hamburger-menu.svg";

import "./navigation.styles.scss";

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <nav>
                <div className="nav-content">
                    <a href="/" className="logo-container">
                        <ShopStyleLogo className="shop-style-logo" />
                    </a>
                    <div className="nav-menu-container">
                        <div></div>

                        <ul className="nav-links-container">
                            <li className="nav-link">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/about">ABOUT US</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/products">PRODUCTS</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>

                        <div>
                            <Link to="/products" className="hamburger-menu-link">
                                <Account className="account-icon" />
                            </Link>
                            <Link to="/about" className="hamburger-menu-link">
                                <ShoppingBag className="shopping-bag-icon" />
                            </Link>
                        </div>
                        <button
                            onClick={toggleMobileMenu}
                            className="hamburger-menu-icon-container"
                        >
                            <MobileHamrugerMenu className="harmburger-menu-icon" />
                        </button>
                    </div>
                </div>
            </nav>
            {isMobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
            <Outlet />
            <Footer />
        </header>
    );
};

export default Navigation;
