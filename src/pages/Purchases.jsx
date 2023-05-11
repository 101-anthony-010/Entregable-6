import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosEcommerce, getConfig } from '../utils/configAxios'
import PurchasesCard from '../components/purchases/PurchasesCard'


const Purchases = () => {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    axiosEcommerce.get("purchases", getConfig())
      .then((res) => {
        const orderPurchases = res.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setPurchases(orderPurchases)
      })
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <main className='p-4 max-w-[1000px] mx-auto'>
      <section className='flex gap-2 mb-4 items-center'>
        <Link to="/">Home</Link>
        <div className='h-[7px] aspect-square bg-red-500 rounded-full'></div>
        <span className='font-bold'>Purchases</span>
      </section>
      <section className='grid gap-6 py-6'>
        {
          purchases.map((purchase) => <PurchasesCard key={purchase.id} purchase={purchase}/>)
        }
      </section>
    </main>
  )
}

export default Purchases