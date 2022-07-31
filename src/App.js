import React from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';
import Cart from './cart/cart'
import { CartProvider } from 'react-use-cart'
import Productlist from './product/productlist/Productlist';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Promos from './promos/promos'
import Productitem from './product/productitem/Productitem'
import Checkout from './checkout/Checkout'
import ScrollTop from './ScrollTop'
const App = () => {
  return (
    <div>
    <Router>
    <ScrollTop>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
          <Route path='/product-list' element={<Productlist />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/promos' element={<Promos/>}/>
          <Route path='/productitem' element={<Productitem/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </ScrollTop>
    </Router>
    </div>
  )
}
export default App