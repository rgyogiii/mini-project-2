import React from 'react'
import Slider from "react-slick";
import Topbrandsdata from './topbrandsdata';

const topbrands = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false
      };

  return (
    <div className='container py-5'>
        <h2>Top Brands</h2>
        <Slider {...settings}>

        { Topbrandsdata.map((brand) =>
        
          <div className='justify-content-center'>
            <img src={brand.imageName} class="card-img-top" alt="..." style={{width: "100px", height: "40px"}}/>
          </div>
        )}
        </Slider>
      </div>
  )
}

export default topbrands