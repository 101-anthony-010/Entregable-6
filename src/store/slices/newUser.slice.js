import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";

const initialState = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    phone : ""
}

const newUserSlice = createSlice({
    name: "newUser",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {...state, ...action.payload}
            return newUser
        }
    }
})
export const {
    addUser
} = newUserSlice.actions

export const registerUser = (data) => (dispatch) => {
    axiosEcommerce.post("users", data)
        .then(() => dispatch(addUser(data)))
        .catch((err) => console.log(err))
}

export default newUserSlice.reducer