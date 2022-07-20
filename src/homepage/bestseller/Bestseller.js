import React from 'react'
import './Bestseller.css'
import Bestsellerdata from './Bestsellerdata'


const Bestseller = () => {

  return (
    <div className='container my-5'>
      <h2>Bestseller Products</h2>
     
        <div className='row justify-content-between'>
          { Bestsellerdata.map((item) =>
    
          <div key={item.id} className='card m-2' style={{width: "10rem"}}>
              <img src={item.imageName} class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <strong>{item.price}</strong>
              </div>
          </div>

          )}
        </div>
        <div className='text-center'>
          <button onClick={{}} className='btn btn-dark mt-3'>See More...</button>
        </div>
      
    </div>
  );
  
}

export default Bestseller