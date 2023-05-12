import { configureStore } from "@reduxjs/toolkit";

import userInfoSlice from "./slices/userInfo.slice";
import cartSlice from "./slices/cart.slice";
import newUserSlice from "./slices/newUser.slice";

export default configureStore({
    reducer: {
        userInfoSlice,
        cartSlice,
        newUserSlice
    }
})