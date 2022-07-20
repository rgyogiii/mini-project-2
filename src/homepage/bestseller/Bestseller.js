import React, {useState} from 'react'
import './Bestseller.css'
import Bestsellerdata from './Bestsellerdata'
import Slider from "react-slick";

const Bestseller = () => {

  const [visible, setVisible ] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  }
  

  return (
    <div className='container my-5'>
      <h2>Bestseller Products</h2>
     
        <div className='row justify-content-between'>
          { Bestsellerdata.slice(0, visible).map((item) =>
    
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
        <button onClick={showMoreItems} className='btn btn-dark mt-3'>See More...</button>
      
    </div>
  );
  
}

export default Bestseller