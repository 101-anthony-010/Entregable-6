import { axiosEcommerce } from "../utils/configAxios"

import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProductCard from "../components/ProductCard"

import { changeIsShowCategory } from "../store/slices/userInfo.slice"

const Home = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState("")
    const [currentCategory, setCurrentCategory] = useState(0)

    const {isShowCategory} = useSelector(store => store.userInfoSlice)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      const newProductName = e.target.productName.value
      setProductName(newProductName)
    }

    const productsByName = useMemo(() => {
      return products.filter((products) => products.title.toLowerCase().includes(productName.toLowerCase()))
    } , [productName, products])

    const handleClickCategory = (e) => {
      setCurrentCategory(Number(e.target.dataset.category))
    }
    const handleClickChangeCatefory = () => {
      dispatch(changeIsShowCategory())
    }

    useEffect(() => {
      axiosEcommerce.get("categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
      if (currentCategory == 0) {
        axiosEcommerce.get("products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
      }
    }, [currentCategory])

    useEffect(() => {
      if (currentCategory) {
        axiosEcommerce.get(`products?categoryId=${currentCategory}`)
          .then((res) => setProducts(res.data))
          .catch((err) => console.log(err))
      }
    }, [currentCategory])
    
  return (
    <main className="m-2">
        <form className="flex md:flex-row-reverse flex-col items-center justify-center md:justify-between mx-6" onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <input className="p-2 shadow-md w-[260px] rounded-md" id="productName" type="text" placeholder='What are you looking for?'/>
                <button className="bg-red-500 text-white px-4 rounded-md"><i className="bx bx-search"></i></button>
            </div>
                <ul className="relative">
                  <h4 onClick={handleClickChangeCatefory} className="font-bold text-lg shadow-md w-[200px] p-2 mb-1 cursor-pointer rounded-md">Category</h4>
                    {
                      isShowCategory ? (
                        <div className="absolute bg-white w-[200px] p-1 rounded-md">
                        <li onClick={handleClickCategory} data-category={0} className="cursor-pointer hover:bg-blue-300 px-3">All</li>
                    {
                        categories.map((category) => <li onClick={handleClickCategory} data-category={category.id} className="hover:bg-blue-300 px-3 cursor-pointer" key={category.id}>{category.name}</li> )
                    }
                        </div>
                      ) : ""
                    }
                </ul>
        </form>
            <section className="max-w-[1000px] mx-auto flex gap-5 flex-wrap items-center justify-center my-4">
                {
                    productsByName?.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </section>
    </main>
  )
}

export default Home
