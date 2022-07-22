import React from 'react'
import Navbar from '../navbar/navbar';
import Homepage from '../homepage/homepage';
import Footer from '../footer/Footer';
import Cart from './cart'
import { CartProvider } from 'react-use-cart'


const cartpage = () => {
  return (
    <div>
    <CartProvider>
      <Navbar/>
      <Cart/>
      <Footer/>  
    </CartProvider>
    </div>
  )
}

export default cartpage;