import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistCartConfig = {
    key: 'cart',
    storage,
}

const persistAuthConfig = {
    key: 'auth',
    storage
}

const persistedCart = persistReducer(persistCartConfig, cartSlice)
const persistedAuth = persistReducer(persistAuthConfig, authSlice)

export const store = configureStore({
    reducer: {
        cart: persistedCart,
        auth: persistedAuth
    },
    devTools: true,
})

export const persistor = persistStore(store)