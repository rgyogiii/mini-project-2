import React from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';
import Productlist from './product/productlist/productlist';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Navbar />
      <div>
        <img src={process.env.PUBLIC_URL+"/img/creatives/bg-podium.svg"} width="100%" alt="header img"/>
      </div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product-list' element={<Productlist />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App