import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: false,
        }).concat(middleWares),
});

export const persistor = persistStore(store);
