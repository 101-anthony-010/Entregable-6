import { axiosEcommerce } from "../utils/configAxios"

import { useEffect, useMemo, useState } from "react"
import ProductCard from "../components/ProductCard"

const Home = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState("")
    const [currentCategory, setCurrentCategory] = useState(0)

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
        <form onSubmit={handleSubmit}>
            <div>
                <input id="productName" type="text" placeholder='What are you looking for?'/>
                <button><i className="bx bx-search"></i></button>
            </div>
            <ul>
                <li onClick={handleClickCategory} data-category={0} className="cursor-pointer">All</li>
                {
                    categories.map((category) => <li onClick={handleClickCategory} data-category={category.id} className="cursor-pointer" key={category.id}>{category.name}</li> )
                }
            </ul>
        </form>
            <section>
                {
                    productsByName?.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </section>
    </main>
  )
}

export default Home
