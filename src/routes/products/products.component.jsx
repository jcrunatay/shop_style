import { Routes, Route } from "react-router-dom";
import ProductsCollectionPreview from "../../components/products-collection-preview/products-collection-preview.component";
import SingleCollectionProducts from "../single-collection-products/single-collection-products.component";

const Products = () => {
    return (
        <Routes>
            <Route
                index
                element={<ProductsCollectionPreview renderedInProductsComponent={true} />}
            />
            <Route path=":category/*" element={<SingleCollectionProducts />} />
        </Routes>
    );
};

export default Products;
