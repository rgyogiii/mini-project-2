import React from 'react'
import laptop from '../../img/laptop/laptop1.jpg'
import Rating from "@mui/material/Rating";
const Productitem = () => {
  return (
    <div className='container-fluid mt-5'>
    <div className='d-flex justify-content-start'>
      <div className='col-4 d-inline'><img src={laptop} alt="" srcset="" width='500px' height='500px' /></div>
      <div className="product-details mt-5 col-4">
        <h2>Lenovo Legion 5 15ARH7H 82RD001APH 15.6" AMD Ryzen 7 6800H | NVIDIA GeForce RTX 3060 | 16GB DDR5-4800 | 512GB SSD [Storm Grey]</h2>
      </div>
    </div>
      
    </div>
  )
}

export default Productitem