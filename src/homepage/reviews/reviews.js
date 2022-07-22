import React from 'react'
import Slider from "react-slick";
import reviewData from './reviewdata'
import './reviews.css'
import Rating from "@mui/material/Rating";
const reviews = () => {
var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='container review-data mt-5 pb-5'>
    <h2 className="my-4 py-2">See our top-rated products' reviews</h2>
        <Slider {...settings}>
        {reviewData.map((item) =>(
        <div className="container mb-5">     
            <br />
            <div className="card px-4">
                <h5 className='item-title'>{item.title}</h5>
                <img height='75px' width='75px' src={item.image}/>
            <div className="value mt-5">
              <div className='d-flex justify-content-between'>
               <span>Value</span>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.value}
                    precision={0.5}
                    readOnly 
                    sx={{
                    fontSize: 20,
                    color: "#121111",
                    }}   
                    />
                </div>      
              </div>
            <div className='quality mt-3'>
            <div className='d-flex justify-content-between'>
            <span>Quality</span>
            <Rating
            name="half-rating-read"
            defaultValue={item.quality}
            precision={0.5}
            readOnly 
            sx={{
            fontSize: 20,
            color: "#121111",
            display: 'flex',
            justifyContent: 'flex-end'
          }}  
            />
            </div>
            </div>
            <div className="price mt-3">
            <div className='d-flex justify-content-between'>
            <span>Price</span>
            <Rating
            name="half-rating-read"
            defaultValue={item.price}
            precision={0.5}
            readOnly 
            sx={{
            fontSize: 20,
            color: "#121111",
            display: 'flex',
            justifyContent: 'flex-end'
           
          }}  
            />
            </div>
            
            </div>
            <div className="reviewed d-flex flex-column mt-5">
                <span className='fs-6'>Review by <span className='fw-bold fs-6'>{item.name}</span></span>
                <span className='mb-5'>{item.comment}</span>
            </div>
            <div className="footer d-flex justify-content-between">
              <span className='text-muted'>See all reviews</span>
              
            </div>

            </div>        
        </div>
        ))}
        </Slider>
    </div>
    

  )
}

export default reviews