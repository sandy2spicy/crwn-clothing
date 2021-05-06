import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;