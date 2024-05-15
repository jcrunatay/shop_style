import { ReactComponent as ShopStyleLogo } from "../../assets/logo-in-svg.svg";
import "./footer.styles.scss";
const Footer = () => (
    <footer>
        <div className="footer-logo-container">
            <ShopStyleLogo className="footer-logo" />
        </div>
        <p>
            © 2023 | Designed and Coded By: <span className="myName">Juyan Criston Runatay</span> ️
        </p>
        <p className="space-balancer"></p>
    </footer>
);

export default Footer;
