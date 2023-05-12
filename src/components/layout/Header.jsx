import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { changeIsShowCart } from '../../store/slices/cart.slice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useSelector(store => store.userInfoSlice)
    const {products} = useSelector(store => store.cartSlice)

    const handleClickChangeShowCart = () => {
        if (!token) return navigate("/login")
        dispatch(changeIsShowCart())
    }
  return (
    <section className='flex justify-between items-center shadow-md px-4'>
        <Link to="/">
            <h1 className='text-center text-red-500 font-bold md:text-2xl text-xl'>E-Commerce</h1>
        </Link>
        <nav className='flex justify-center gap-3 text-xl'>
            <Link className='p-3 hover:bg-red-500 hover:text-white transition-colors delay-100' to="/login">
                <i className="bx bx-user"></i>
            </Link>
            <Link className='p-3 hover:bg-red-500 hover:text-white transition-colors delay-100' to="/purchases">
                <i className="bx bx-box"></i>
            </Link>
            <button onClick={handleClickChangeShowCart} className='p-3 hover:bg-red-500 hover:text-white transition-colors delay-100'>
                <i className="bx bx-cart relative"><span className='absolute -top-1/2 -right-3 text-xs w-[20px] h-[20px] p-[1px] bg-red-500 rounded-full text-white'>{products.length}</span></i>
            </button>
        </nav>
    </section>
  )
}

export default Header