import React from 'react'
import first from './promo1/promo1.1.jpg'
import second from './promo1/promo1.2.jpg'
import third from './promo1/promo1.3.jpeg'
import fourth from './promo1/promo1.4.jpg'
import fifth from './promo1/promo1.5.jpg'
import './promo1.css'
const promo1 = () => {
  return (
    <div className='container first-promos'>
    <div className='d-flex container first-row justify-content-center'>
        <img className='p-1' width='580px' height='188px' src={first}/>
        <img className='p-1' width='580px' height='188px' src={second}/>
    </div>
    <div className='d-flex mt-4 second-row justify-content-center'>
        <img className='p-1' width='580px' height='188px' src={third}/>
        <img className='p-1' width='580px' height='188px' src={fourth}/>
        <img className='p-1'width='580px' height='188px' src={fifth}/>
    </div>

    </div>
  )
}
export default promo1