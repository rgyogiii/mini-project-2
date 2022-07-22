import React from 'react'
import Slider from "react-slick";
import Topbrandsdata from './topbrandsdata';

const topbrands = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
      };

  return (
    <div className='container my-5'>
        <h1 className="my-5 component-title">Top Brands</h1>
        <Slider {...settings}>

        { Topbrandsdata.map((brand) =>
        
          <div className='d-flex justify-content-center pb-5'>
            <img src={brand.imageName} class="card-img-top" alt="..." style={{width: "100px", height: "40px"}}/>
          </div>
        )}
        </Slider>
      </div>
  )
}

export default topbrands