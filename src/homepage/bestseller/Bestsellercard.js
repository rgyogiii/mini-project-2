import React, { useState } from 'react'
import Rating from "@mui/material/Rating";
import { useCart } from 'react-use-cart'
const Bestsellercard = (props, i) => {
  const { addItem } = useCart() 
  const [isHovered, setHover] = useState(-1);
  const showButton = (i)=>{
      setHover(i)
  }
  const hideButton =()=>{
      setHover(-1)
  }
  return (
    <div key={props.id} className='card m-2' style={{width: "18rem"}}>
      <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
        <img src={props.imageName} class="card-img-top mb-3" alt="..." />
        <div className="image-hover">
            { isHovered === i && (
              <div className='d-flex justify-content-start'>
                <button onClick={()=> addItem(props.item)}className="mb-5 mx-2 btn btn-secondary btn-xs fw-bold" type="button" >Add to cart</button>
              </div>
            )}
            <br />
          </div> 
        </div>
        <div class="card-body">
        <div className='d-flex justify-content-end'>
          <i className="bi bi-heart fav-icon"></i>
        </div>
        <h5 class="card-title title fw-bold text-ellipsis">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <div className='d-flex justify-content-between'>
          <strong>₱{props.price.toLocaleString()}</strong>
          <div className='d-flex px-2 align-items-center'>
            <Rating
              name="half-rating-read"
              defaultValue={props.ratings}
              precision={0.5}
              readOnly 
              sx={{
                fontSize: 18,
                color: "#121111",
              }}  
            />
            <span className='fs-6 text-muted revNum  pt-1'>({props.reviewNum})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bestsellercard