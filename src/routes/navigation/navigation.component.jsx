import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase";
/* import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context"; */

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartCount } from "../../store/cart/cart.selector";

import { ReactComponent as ShopStyleLogo } from "../../assets/logo-in-svg.svg";
import { ReactComponent as Account } from "../../assets/account.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { ReactComponent as MobileHamrugerMenu } from "../../assets/hamburger-menu.svg";

import MobileMenu from "../../components/mobile-hidden-menu/mobile-hidden-menu.component";
import Footer from "../../components/footer/footer.component";
import "./navigation.styles.scss";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartItemCount = useSelector(selectCartCount);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const signOutHandler = async () => {
        await signOutUser();
    };

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

                        <div className="nav-icon-links-container">
                            {!currentUser ? (
                                <Link to="/auth/signin" className="nav-icon-link">
                                    <Account className="account-icon" />
                                </Link>
                            ) : (
                                <button onClick={signOutHandler} className="sign-out-btn">
                                    SIGN OUT
                                </button>
                            )}

                            <Link to="/checkout" className="nav-icon-link">
                                <ShoppingBag className="shopping-bag-icon" />
                                <span className="checkout-items-counter-container">
                                    <span className="checkout-items-counter">{cartItemCount}</span>
                                </span>
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
