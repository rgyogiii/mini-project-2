import React from 'react'
import Slider from "react-slick";
import './adcarousel.css'
const adcarousel = () => {
    const ads=[
        {
            id:1,
            adimage:' /img/ads/ads1.jpg'

        },
           {
            id:2,
            adimage:' /img/ads/ads2.jpg'

        },
           {
            id:3,
            adimage:' /img/ads/ads3.jpg'

        },
           {
            id:4,
            adimage:' /img/ads/ads4.jpg'

        },
           {
            id:5,
            adimage:' /img/ads/ads5.jpg'

        },
           {
            id:6,
            adimage:' /img/ads/ads6.jpg'

        },
           {
            id:7,
            adimage:' /img/ads/ads7.jpg'

        },
           {
            id:8,
            adimage:' /img/ads/ads8.jpg'

        },
           {
            id:9,
            adimage:' /img/ads/ads9.jpg'

        },
           {
            id:10,
            adimage:' /img/ads/ads10.jpg'

        },
           {
            id:11,
            adimage:' /img/ads/ads11.jpg'

        },
           {
            id:12,
            adimage:' /img/ads/ads12.jpg'

        },
           {
            id:13,
            adimage:' /img/ads/ads13.jpg'

        },
    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",
      arrows: false,
      fade: true,
    };

  return (
    <div>
     <Slider {...settings}>
        {ads.map((props)=>(
            <div className='ad-image d-flex justify-content-center'>
                <img src={props.adimage} alt="" srcset="" width='100%' />
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default adcarousel