import { Link } from '@mui/material';
import React from 'react'
import './Bestseller.css'
import Bestsellercard from './Bestsellercard';
import Bestsellerdata from './Bestsellerdata'
import { useNavigate } from 'react-router-dom';


const Bestseller = () => {
let navigate = useNavigate();
  return (
    <div className='container my-5'>
      <h1 className="my-4">Bestseller Products</h1>
     
        <div className='row justify-content-between'>
          { Bestsellerdata.map((item) =>
    
            <Bestsellercard 
              key={item.id}
              title={item.title}
              price={item.price}
              imageName={item.imageName}
              ratings={item.ratings}
              reviewNum={item.reviewNum}
              item={item}
            />

          )}
        </div>
        <div className='text-center pb-5'>
          <button onClick={() => {navigate("/product-list")}} className='btn btn-outline-dark mt-3 cMore-prd'>See More...</button>
        </div>
      
    </div>
  );
  
}

export default Bestseller