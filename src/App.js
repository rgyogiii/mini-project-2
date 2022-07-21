import React from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';
import Productlist from './product/productlist/Productlist';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <div>
    // <img src={process.env.PUBLIC_URL+"/img/creatives/bg-podium.svg"} alt="header img"/>
    // </div>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product-list' element={<Productlist />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App