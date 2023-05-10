import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedAuth = () => {
    const {token} = useSelector(store => store.userInfoSlice)
    console.log(token)
    if (token) {
        return <Outlet/>
    } else {
        return <Navigate to="/login"/>
    }
}

export default ProtectedAuth