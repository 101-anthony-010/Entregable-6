import { useParams } from 'react-router-dom'

import ProductDetail from '../components/product/ProductDetail'

const Product = () => {

  const {id} = useParams()
  
  return (
    <main className='px-2'>
      <ProductDetail productsId={id}/>
    </main>
  )
}

export default Product