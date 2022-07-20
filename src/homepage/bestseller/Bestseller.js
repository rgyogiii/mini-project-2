import React from 'react'
import './Bestseller.css'
import Bestsellerdata from './Bestsellerdata'
import Rating from "@mui/material/Rating";


const Bestseller = () => {

  return (
    <div className='container my-5'>
      <h2>Bestseller Products</h2>
     
        <div className='row justify-content-between'>
          { Bestsellerdata.map((item) =>
    
          <div key={item.id} className='card m-2' style={{width: "18rem"}}>
              <img src={item.imageName} class="card-img-top" alt="..." />
              <div class="card-body">
                  <div className='d-flex justify-content-end'>
                    <i className="bi bi-heart fav-icon"></i>
                  </div>
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <div className='d-flex justify-content-between'>
                    <strong>{item.price}</strong>
                    <div>
                      <Rating
                        name="half-rating-read"
                        defaultValue={item.ratings}
                        precision={0.5}
                        readOnly 
                        sx={{
                          fontSize: 18,
                          color: "#121111",
                        }}  
                      />
                      <span className='fs-6 text-muted revNum'>({item.reviewNum})</span>
                    </div>
                  </div>
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