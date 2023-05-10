import { configureStore } from "@reduxjs/toolkit";

import userInfoSlice from "./slices/userInfo.slice";

export default configureStore({
    reducer: {
        userInfoSlice
    }
})