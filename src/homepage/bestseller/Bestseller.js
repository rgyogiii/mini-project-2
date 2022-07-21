import React from 'react'
import './Bestseller.css'
import Bestsellercard from './Bestsellercard';
import Bestsellerdata from './Bestsellerdata'



const Bestseller = () => {

  return (
    <div className='container my-5'>
      <h2>Bestseller Products</h2>
     
        <div className='row justify-content-between'>
          { Bestsellerdata.map((item) =>
    
            <Bestsellercard 
              key={item.id}
              title={item.title}
              price={item.price}
              imageName={item.imageName}
              ratings={item.ratings}
              reviewNum={item.reviewNum}
            />

          )}
        </div>
        <div className='text-center'>
          <button onClick={{}} className='btn btn-dark mt-3'>See More...</button>
        </div>
      
    </div>
  );
  
}

export default Bestseller