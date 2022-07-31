import React, {useState} from 'react'
import './feature.css'
import { useCart } from 'react-use-cart'
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom'
const Card = (props, i) => {
  const { addItem } = useCart() 
    const [isHovered, setHover] = useState(-1);
    const showButton = (i)=>{
        setHover(i)
    }
    const hideButton =()=>{
        setHover(-1)
    }
  return (  
      <div className='card-list mb-5 pb-3'>
        <div className="image-hover">
          <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
            <div className='d-flex justify-content-center'>
            <Link to='/productitem'>
              <img src={props.imageName} width='250px' height='240px'/>
            </Link>
              
            </div> 
            <br/>
            { isHovered === i && (
              <div className='d-flex justify-content-start'>
                <button onClick={()=> addItem(props.item)} className="mb-5 mx-2 btn btn-secondary btn-xs fw-bold" type="button" >Add to cart</button>
              </div>
            )}
            <br />
          </div> 
        </div>
        <div className='d-flex justify-content-end mx-3'>
          <i className="bi bi-heart fav-icon"></i>
        </div>
        <span className='title-product fw-bold px-1 text-ellipsis'>{props.title} </span>
        <div className="price">
          <div className='d-flex justify-content-between'>
          <span className='fs-6 px-1 fw-bold'>₱{props.price.toLocaleString()}</span>
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
          <span className='fs-6 text-muted revNum pt-1'>({props.reviewNum})</span>
          </div>
        </div>
        </div>          
        </div>
  )
}

export default Card