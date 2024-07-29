import { Routes, Route } from "react-router-dom";

import ProductCards from "../../components/product-cards/product-cards.component";
import SingleProduct from "../single-product/single-product.component";

const SingleCollectionProducts = () => {
    return (
        <Routes>
            <Route index element={<ProductCards />}></Route>
            <Route path=":id" element={<SingleProduct />}></Route>
        </Routes>
    );
};

export default SingleCollectionProducts;
