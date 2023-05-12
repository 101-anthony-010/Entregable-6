import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { axiosEcommerce } from '../../utils/configAxios'

import SimilarProducts from './SimilarProducts'
import { addProductCart } from '../../store/slices/cart.slice'

const stylePositionImages = {
    "0": "-ml-[0%]",
    "1": "-ml-[100%]",
    "2": "-ml-[200%]"
}

const ProductDetail = ({productsId}) => {
    const [productData, setProductData] = useState()
    const [counter, setCounter] = useState(1)
    const [imageToShow, setImageToShow] = useState(0)

    const dispatch = useDispatch()
    
    const handleClickPlus = () => {
        const newCounter = counter + 1
        setCounter(newCounter)
    }
    const handleClickLess = () => {
        const newCounter = counter - 1
        if (counter > 0){
            setCounter(newCounter)
        }
    }
    const handleClickAddToCart = () => {
        dispatch(addProductCart({quantity: counter, productId: productData.id}))
    }
    
    const nextImage = () => {
        const newImagePosition = imageToShow + 1
        if (newImagePosition <= 2) {
            setImageToShow(newImagePosition)
        } else {
            setImageToShow(0)
        }
    }
    const previusImage = () => {
        const newImagePosition = imageToShow - 1
        if (newImagePosition >= 0) {
            setImageToShow(newImagePosition)
        } else {
            setImageToShow(2)
        }
    }

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
        <span className='font-bold'>{productData?.title}</span>
      </section>
    <section className='grid gap-6 sm:grid-cols-2 items-center max-w-[1000px] mx-auto'>
        <section className='overflow-hidden relative'>
            <section className={`flex w-[300%] ${stylePositionImages[imageToShow]} duration-200`}>
                <div className='h-[300px] p-4  w-[calc(100%_/_3)]'>
                    <img className='h-full w-full object-contain' src={productData?.images[0].url} alt="" />
                </div>
                <div className='h-[300px] p-4  w-[calc(100%_/_3)]'>
                    <img className='h-full w-full object-contain' src={productData?.images[1].url} alt="" />
                </div>
                <div className='h-[300px] p-4  w-[calc(100%_/_3)]'>
                    <img className='h-full w-full object-contain' src={productData?.images[2].url} alt="" />
                </div>
            </section>
            <i onClick={previusImage} className="cursor-pointer text-red-500 hover:bg-red-500 rounded-full p-1 hover:text-white text-xs text-center w-[25px] h-[25px] bx bxs-left-arrow absolute top-1/2 left-2 -translate-y-1/2"></i>
            <i onClick={nextImage} className="cursor-pointer text-red-500 hover:bg-red-500 rounded-full p-1 hover:text-white text-xs text-center w-[25px] h-[25px] bx bxs-right-arrow absolute top-1/2 right-2 -translate-y-1/2"></i>
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
                        <button onClick={handleClickLess} className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white transition-colors'>-</button>
                        <span className='border-[1px] border-x-0 p-2 px-4'>{counter}</span>
                        <button onClick={handleClickPlus} className='border-[1px] p-2 px-4 hover:bg-red-500 hover:text-white transition-colors'>+</button>
                    </div>
                </article>
            </section>
            <button onClick={handleClickAddToCart} className='w-full bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6'>Add to cart</button>
            <p className='text-sm my-6 text-gray-700'>{productData?.description}</p>
        </section>
    </section>
    <SimilarProducts productId={productData?.id} categoryId={productData?.categoryId}/>
    </>
  )
}

export default ProductDetail
