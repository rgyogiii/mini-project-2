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
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: 3,
            arrows: false
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: 3,
            arrows: false,
          }
        },
      ]
    }
  return (
    <div className="final container">
    <h2>Featured Products</h2>
        <Slider {...settings}>
            {featuredata && featuredata.map((item, i) =>(
              <div className='card-list mb-5 pb-3 '>
              <div className="image-hover">
        <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}>
        <div className='d-flex justify-content-center'><img src={item.imageName} width='250px' height='240px'/></div> <br/>
          {isHovered === i && (
            <div className='d-flex justify-content-start'><button className="mb-5 mx-2 btn btn-secondary btn-xs fw-bold" type="button" >Add to cart</button></div>
              )}<br />
        </div> 
        </div>
        <div className='d-flex justify-content-end mx-3'>
          <i className="bi bi-heart fav-icon"></i>
        </div>
        <span className='title fw-bold px-1'>{item.title} </span>
        <div className="price">
          <div className='d-flex justify-content-between'>
          <span className='fs-6 px-1 fw-bold'>{item.price}</span>
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
          <span className='fs-6 text-muted revNum'>({item.reviewNum})</span>
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