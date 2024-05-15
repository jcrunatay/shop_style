import { useRef, useEffect } from "react";
import "./mobile-hidden-menu.styles.scss";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMobileMenu, isMobileMenuOpen }) => {
    const popupRef = useRef(null);
    const popupOverlayRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupOverlayRef.current === event.target) {
                toggleMobileMenu();
            } else {
                const classList = Array.from(event.target.classList);
                if (classList.includes("mobile-menu-item-link")) {
                    toggleMobileMenu();
                }
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [toggleMobileMenu]);

    return (
        <div className="overlay" ref={popupOverlayRef}>
            <div className="mobile-menu-container" ref={popupRef}>
                <button className="close-mobile-menu-btn" onClick={toggleMobileMenu}>
                    ✖
                </button>
                <ul className="mobile-menu">
                    <li className="mobile-menu-item">
                        <Link to="/" className="mobile-menu-item-link">
                            HOME
                        </Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link to="/about" className="mobile-menu-item-link">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link to="/products" className="mobile-menu-item-link">
                            PRODUCTS
                        </Link>
                    </li>
                    <li className="mobile-menu-item">
                        <a href="/" className="mobile-menu-item-link">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
