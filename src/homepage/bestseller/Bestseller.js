import React, {useState} from 'react'
import './Bestseller.css'
import Bestsellerdata from './Bestsellerdata'
import Slider from "react-slick";

const Bestseller = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  }

  return (
    <div className='container my-5'>
      <h2>Bestseller Products</h2>
      <Slider {...settings}>
        
        { Bestsellerdata.map((item, i) =>

        <div key={item.id} className='card m-3' style={{width: "18rem"}}>
            <img src={item.imageName} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <strong>{item.price}</strong>
            </div>
        </div>

        )}
      </Slider>
    </div>
  );
  
}

export default Bestseller