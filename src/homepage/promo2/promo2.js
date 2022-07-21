import React from 'react'
import first from './promo2/promo2.1.jpg'
import second from './promo2/promo2.2.jpg'
import third from './promo2/promo2.3.jpg'
import fourth from './promo2/promo2.4.jpg'

import './promo2.css'
const promo1 = () => {
  return (
    <div className='container second-promos mt-5'>
      <div className='d-flex justify-content-center first-ad'><img src={first} width='1420px' height='204px'/></div>
      <div className='d-flex justify-content-center mt-3 second-ad'>
    <img className='p-1' src={second} width='460px' height='329px' alt="" srcset="" />
    <img className='p-1' src={third} width='460px' height='329px' alt="" srcset="" />
    <img className='p-1' src={fourth} width='460px' height='329px' alt="" srcset="" />
    </div>

    </div>
  )
}
export default promo1