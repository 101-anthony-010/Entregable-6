import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const handleClickAddProduct = (e) => {
        e.stopPropagation();
    }
  return (
    <Link to={`/products/${product.id}`}>
        <div className='h-[200px]'>
            <img src={product.images[0].url} className={`w-full h-full object-contain`} alt="" />
        </div>
        <section className='p-4 relative'>
            <h4 className='text-gray-400 font-bold'>{product.brand}</h4>
            <h3 className='font-bold text-sm ml-2'>{product.title}</h3>
            <h4 className='text-gray-400 font-bold mt-4'>Price</h4>
            <span className='font-bold text-sm ml-2'>{product.price}</span>
            <button onClick={handleClickAddProduct} className='absolute right-4 bottom-4 bg-red-500 p-2 rounded-full text-white w-[45px] aspect-square hover:bg-red-600 transition-colors'><i className="bx bx-cart-alt"></i></button>
        </section>
    </Link>
  )
}

export default ProductCard