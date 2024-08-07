import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { UserProvider } from "./context/user.context";
import { CartProvider } from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);
