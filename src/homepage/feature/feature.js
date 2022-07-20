import React, {useState} from 'react'
import './feature.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredata from './featuredata'
import Rating from "@mui/material/Rating";

const Final = () => {
    const [isHovered, setHover] = useState(-1);
    const showButton = (i)=>{
        setHover(i)
    }
    const hideButton =()=>{
        setHover(-1)
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: 5
          }
        },
         {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: 5
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: 3
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: 3
          }
        },
      ]
    }
  return (
    <div className="final">
    <h2>Featured Products</h2>
        <Slider {...settings}>
            {featuredata && featuredata.map((item, i) =>(
              <div className=''>
              <div className="image-hover">
        <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
        <img src={item.imageName} width='230px' height='240px'/> <br/>
          {isHovered === i && (
            <button className="mb-5 mx-2 btn btn-secondary btn-xs" type="button" >Add to cart</button>
              )}<br />
        </div> 
        </div>
        <div className='d-flex align-items-end'>
          <i className="bi bi-heart fav-icon"></i>
        </div>
        
        <div className="title">
          <span className='title fs-6 text-muted position-static px-1'>{item.title} </span>
        </div>
        <div className="price">
          <div className='d-flex justify-content-between'>
          <span className='fs-6 text-muted px-1'>{item.price}</span>
          <div className='d-flex px-2'>
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
          <span className='fs-6 text-muted pb-1'>{item.reviewNum}</span>
          </div>
            
        </div>
        </div>          
        </div>
        ))}
        </Slider> 
    </div>
    
  )
}

export default Final