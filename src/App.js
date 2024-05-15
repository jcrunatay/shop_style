import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Home from "./routes/home/home.component";
import Products from "./routes/products/products.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
