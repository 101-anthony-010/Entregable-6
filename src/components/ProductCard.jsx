import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addProductCart } from '../store/slices/cart.slice';

const ProductCard = ({product}) => {
    const dispatch = useDispatch()  
  
    const handleClickAddProduct = (e) => {
      e.preventDefault();
      dispatch(addProductCart({ productId: product.id, quantity: 1}))
    }
  return (
    <Link to={`/products/${product.id}`}>
      <div className='border-[2px] border-gray-200 rounded-lg p-2'>
        <div className='h-[200px] relative overflow-hidden group'>
          <img src={product.images[0].url} className={`transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-contain`} alt="" />
          <img src={product.images[1].url} className={`transition-opacity duration-300 group-hover:opacity-100 w-full h-full object-contain absolute top-0 left-0 opacity-0`} alt="" />
        </div>
        <section className='p-4 relative bg-white'>
          <h4 className='text-gray-400 font-bold'>{product.brand}</h4>
          <h3 className='font-bold text-sm ml-2'>{product.title}</h3>
          <h4 className='text-gray-400 font-bold mt-4'>Price</h4>
          <span className='font-bold text-sm ml-2'>{product.price}</span>
          <button onClick={handleClickAddProduct} className='absolute right-4 bottom-4 bg-red-500 p-2 rounded-full text-white w-[45px] aspect-square hover:bg-red-600 transition-colors'><i className="bx bx-cart-alt"></i></button>
        </section>
      </div>
    </Link>
  )
}

export default ProductCard