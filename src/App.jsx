import './index.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Product from './pages/Product'
import Header from './components/Layout/Header'
import Footer from './components/layout/Footer'
import NotFound from './pages/NotFound'
import ProtectedAuth from './components/auth/protectedAuth'
import Cart from './components/cart/Cart'
import Signup from './pages/Signup'

function App() {

  return (
    <section className='grid grid-rows-[auto_1fr] min-h-screen'>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route element={<ProtectedAuth/>}>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>

        <Route path='/signup*' element={<Signup/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
      <Cart/>
    </section>
  )
}

export default App
