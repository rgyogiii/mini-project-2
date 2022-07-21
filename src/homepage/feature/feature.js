import React, {useState} from 'react'
import './feature.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredata from './featuredata'
import Card from './card'
const Final = ({handleClick}) => {
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
    <h2>Featured Products</h2>
        <Slider {...settings}>
            {featuredata.map((item) =>(
              <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageName={item.imageName}
              ratings={item.ratings}
              reviewNum={item.reviewNum}
              />
        ))}
        </Slider> 
    </div>
    
  )
}

export default Final