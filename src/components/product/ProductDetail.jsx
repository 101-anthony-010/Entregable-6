import { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import { Link } from 'react-router-dom'

import SimilarProducts from './SimilarProducts'

const ProductDetail = ({productsId}) => {
    const [productData, setProductData] = useState()
    
    useEffect(() => {
      axiosEcommerce.get(`products/${productsId}`)
        .then((res) => setProductData(res.data))
        .catch((err) => console.log(err))
    }, [productsId])

  return (
    <>
     <section className='flex gap-2 items-center'>
        <Link to="/">Home</Link>
        <div className='h-[7px] aspect-square bg-red-500 rounded-full'></div>
        <span className='font-bold'>{productData.title}</span>
      </section>
    <section className='grid gap-6 sm:grid-cols-2 items-center max-w-[1000px] mx-auto'>
        <section>
            <div className='h-[300px] p-4'>
                <img className='h-full w-full object-contain' src={productData?.images[0].url} alt="" />
            </div>
        </section>
        <section>
            <h4 className='text-gray-400 font-bold'>{productData?.brand}</h4>
            <h3 className='font-bold text-lg ml-2'>{productData?.title}</h3>
            <section className='grid grid-cols-2 mt-6'>
                <article>
                    <h4 className='text-gray-400 font-bold'>Price</h4>
                    <span>{productData?.price}</span>
                </article>
                <article>
                    <h4 className='text-gray-400 font-bold'>Quantity</h4>
                    <div className='flex items-center'>
                        <button className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white transition-colors'>-</button>
                        <span className='border-[1px] border-x-0 p-2 px-4'>1</span>
                        <button className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white transition-colors'>+</button>
                    </div>
                </article>
            </section>
            <button className='w-full bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6'>Add to cart</button>
            <p className='text-sm my-6 text-gray-700'>{productData?.description}</p>
        </section>
    </section>
    <SimilarProducts productId={productData?.id} categoryId={productData?.categoryId}/>
    </>
  )
}

export default ProductDetail
