import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";

const initialState = {
    products: [],
    isShowCart: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        changeIsShowCart: (state) => {
            state.isShowCart = !state.isShowCart
        },
        setProducts: (state, action) => {
            const newProducts = action.payload
            state.products = newProducts
        },
        addProduct: () => {

        }
    }
})
export const {
    changeIsShowCart,
    setProducts
} = cartSlice.actions

export const getCartProduct = () => (dispatch) => {
    axiosEcommerce.get("cart", getConfig())
        .then((res)=> dispatch(setProducts(res.data)))
        .catch((err) => console.log(err))
}

export const addProductCart = (data) => (dispatch) => {
    axiosEcommerce.post("cart", data, getConfig())
        .then(() => dispatch(getCartProduct()))
        .catch((err) => console.log(err))
}

export const deleteProductCart = (id) => (dispatch) => {
    axiosEcommerce.delete(`cart/${id}`, getConfig())
        .then(() => dispatch(getCartProduct()))
        .catch((err) => console.log(err))
}

export const purchasesCart = () => (dispatch) => {
    axiosEcommerce.post("purchases",{} , getConfig())
        .then(() => dispatch(getCartProduct()))
        .catch((err) => console.log(err))
}

export default cartSlice.reducer