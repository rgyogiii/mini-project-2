import React from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/Footer';
<<<<<<< HEAD
import Productlist from './product/productlist/Productlist';
=======
import Productlist from './product/productlist/productlist';
>>>>>>> ce816640396907325e9d9532206441532edf44f3
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