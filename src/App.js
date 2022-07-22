import React from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';
import Cart from './cart/cart'
import { CartProvider } from 'react-use-cart'
import Productlist from './product/productlist/productlist';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Promos from './promos/promos'

const App = () => {
  return (
    <div>
    <Router>
      <CartProvider>
      <Navbar/>
      <img src={process.env.PUBLIC_URL+"/img/creatives/bg-podium.svg"} width="100%" alt="headerimg"/>
      <Routes>
        <Route path='/' element={<Homepage />} />
          <Route path='/product-list' element={<Productlist />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/promos' element={<Promos/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </Router>
    
      
      
    </div>
  )
}
export default App