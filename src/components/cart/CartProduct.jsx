import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'

const CartProduct = ({product}) => {
    const dispatch = useDispatch()

    const handleClickDelete = () => {
        dispatch(deleteProductCart(product.id))
    }

    return (
    <article className=''>
        <section className='grid grid-cols-[auto_1fr_auto] items-center gap-1'>
            <div className='h-[90px] aspect-square row-span-2 p-2'>
                <img className='w-full h-full object-contain' src={product.product.images[0].url} alt="" />
            </div>
            <h4>{product.product.title}</h4>
            <i onClick={handleClickDelete} className="text-red-500 bx bxs-trash cursor-pointer"></i>
            <div className='flex items-center'>
                <button className='border-[1px] p-1 px-2 hover:bg-red-500 hover:text-white transition-colors'>-</button>
                <span className='border-[1px] border-x-0 p-1 px-2'>{product.quantity}</span>
                <button className='border-[1px] p-1 px-2 hover:bg-red-500 hover:text-white transition-colors'>+</button>
            </div>
        </section>
        <h4 className='mt-2 text-end'>Total: <span className='font-bold'>${(product.quantity * product.product.price).toFixed(1)}</span></h4>
    </article>
  )
}

export default CartProduct
