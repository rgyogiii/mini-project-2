import React, {useState} from 'react'
import './feature.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredata from './featuredata'
import Card from './card'


const Final = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 650,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
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
    <h1 className="my-5 component-title">Featured Products</h1>
      <div className="mx-2 mt-3">
          <Slider {...settings}>
              {featuredata.map((item) =>(
                <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imageName={item.imageName}
                ratings={item.ratings}
                reviewNum={item.reviewNum}
                item= {item}  
                />
          ))}
          </Slider> 
      </div>
    </div>
    
  )
}

export default Final