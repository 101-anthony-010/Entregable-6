import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { changeIsShowCart, getCartProduct, purchasesCart } from '../../store/slices/cart.slice'

import CartProduct from './CartProduct'

const Cart = () => {
    const {isShowCart, products} = useSelector(store => store.cartSlice)
    const {token} = useSelector(store => store.userInfoSlice)


    const dispatch = useDispatch() 

    const handleClickChangeShowCart = () => {
        dispatch(changeIsShowCart())
    }
    const handleClickCkeckout = () => {
      dispatch(purchasesCart())
    }

    const totalPrice = products.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0 )

    useEffect(() => {
      if (isShowCart) {
        dispatch(getCartProduct())
      }
    }, [isShowCart])
    
    return (
    <section className={`fixed top-0 bg-white h-screen w-[300px] ${isShowCart && token ? "right-0":"-right-full"} duration-200 shadow-lg p-3 grid grid-rows-[auto_1fr_auto]`}>
        <h2 className='text-xl font-bold'>Shopping cart</h2>
        <i onClick={handleClickChangeShowCart} className='bx bx-x absolute top-2 right-3 text-xl cursor-pointer'></i>
        <section className='overflow-y-auto grid gap-10 py-4 content-start'>
          {
            products.map(product => <CartProduct key={product.id} product={product}/>)
          }
        </section>
        <section className='grid grid-cols-2 py-4 border-t-[1px] border-gray-500'>
            <span className=''>Total</span>
            <h4 className='text-right'>${totalPrice}</h4>
            <button onClick={handleClickCkeckout} className='my-3 bg-red-500 col-span-2 p-2 rounded-md hover:bg-red-700 text-white'>Checkout</button>
        </section>
    </section>
  )
}

export default Cart