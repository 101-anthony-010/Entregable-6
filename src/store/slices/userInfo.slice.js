import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";

const initialState = {
    token: "",
    user: null,
    isShowCategory: false
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: JSON.parse(localStorage.getItem("userInfo")) ?? initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const newState = {...state, ...action.payload}
            localStorage.setItem("userInfo", JSON.stringify(newState))
            return newState
        },
        logOut: (state) => {
            const newState = {...state, ...initialState}
            localStorage.setItem("userInfo", JSON.stringify(newState))
            return newState
        },
        changeIsShowCategory: (state) => {
            state.isShowCategory = !state.isShowCategory
        }
    }
})
export const { 
    setUserInfo, 
    logOut,
    changeIsShowCategory  
} = userInfoSlice.actions

export const loginUser = (data) => (dispacth) => {
    axiosEcommerce.post("users/login", data)
      .then((res) => dispacth(setUserInfo(res.data)))
      .catch((err) => console.log(err))
}

export default userInfoSlice.reducer;