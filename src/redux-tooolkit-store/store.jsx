import { configureStore } from '@reduxjs/toolkit'
import prodReducer from "./slice/ProdSlice"
import cartReducer from "./slice/cartslice";
import UserReducer from "./slice/UserSlice";


import thunk from "redux-thunk";
export const store = configureStore({
    reducer: { products: prodReducer, cartArr: cartReducer, user: UserReducer },
    middleware: [thunk]
})