import React, {useState} from 'react'
import './feature.css'

import Rating from "@mui/material/Rating";

const Card = (item, i, handleClick) => {
    const [isHovered, setHover] = useState(-1);
    const showButton = (i)=>{
        setHover(i)
    }
    const hideButton =()=>{
        setHover(-1)
    }
  return (  
      <div className='  mb-5 pb-3'>

        <div className="image-hover">
          <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
            <div className='d-flex justify-content-center'>
              <img src={item.imageName} width='250px' height='240px'/>
            </div> 
            <br/>
            { isHovered === i && (
              <div className='d-flex justify-content-start'>
                <button onClick={() => handleClick(item)} className="mb-5 mx-2 btn btn-secondary btn-xs fw-bold" type="button" >Add to cart</button>
              </div>
            )}
            <br />
            
          </div> 
        </div>

        <div className='d-flex justify-content-end mx-3'>
          <i className="bi bi-heart fav-icon"></i>
        </div>

        <span className='title fw-bold px-1'>{item.title}</span>

        <div className="price">
          <div className='d-flex justify-content-between'>
            <span className='fs-6 px-1 fw-bold'>₱ {item.price.toLocaleString()}</span>
            <div className='d-flex px-2 align-items-center'>
              <Rating
              name="half-rating-read"
              defaultValue={item.ratings}
              precision={0.5}
              readOnly 
              sx={{
              fontSize: 16,
              color: "#121111",
            }}  
              />
            <div className='fs-6 text-muted revNum d-flex align-self-center pt-1 ms-1'><span>({item.reviewNum})</span></div>
            </div>         
          </div>
        </div>          
      </div>
  )
}

export default Card