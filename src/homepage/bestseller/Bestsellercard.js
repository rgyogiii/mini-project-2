import React, { useState } from 'react'
import Rating from "@mui/material/Rating";

const Bestsellercard = (item, i, handleClick) => {
  const [isHovered, setHover] = useState(-1);
  const showButton = (i)=>{
      setHover(i)
  }
  const hideButton =()=>{
      setHover(-1)
  }
  return (
    <div key={item.id} className='card m-2' style={{width: "18rem"}}>
      <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
        <img src={item.imageName} class="card-img-top mb-3" alt="..." />
        <div className="image-hover">
            { isHovered === i && (
              <div className='d-flex justify-content-start'>
                <button onClick={() => handleClick(item)}className="mb-5 mx-2 btn btn-secondary btn-xs fw-bold" type="button" >Add to cart</button>
              </div>
            )}
            <br />
          </div> 
        </div>
        <div class="card-body">
        <div className='d-flex justify-content-end'>
          <i className="bi bi-heart fav-icon"></i>
        </div>
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.description}</p>
        <div className='d-flex justify-content-between'>
          <strong>₱{item.price.toLocaleString()}</strong>
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
  )
}

export default Bestsellercard