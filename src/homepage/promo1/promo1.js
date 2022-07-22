import React from 'react'
import first from './promo1/promo1.1.jpg'
import second from './promo1/promo1.2.jpg'
import third from './promo1/promo1.3.jpeg'
import fourth from './promo1/promo1.4.jpg'
import fifth from './promo1/promo1.5.jpg'
import './promo1.css'
const promo1 = () => {
  return (
    <div className='container first-promos mt-5'>
    <div className='row justify-content-between container first-promos mt-5'>
      <div className='d-flex col-lg-6 col-md-3 first-row pe-lg-1 pe-md-0 py-1'>
          <img width='100%' src={first}/>
      </div>
      <div className='d-flex col-lg-6 col-md-3 first-row ps-lg-1 pe-md-0 py-1'>
          <img width='100%' src={second}/>
      </div>
    </div>

    {/* 3 promo cards */}
    {/* <div className='d-flex mt-4 second-row justify-content-center'>
        <img className='p-1' width='580px' height='188px' src={third}/>
        <img className='p-1' width='580px' height='188px' src={fourth}/>
        <img className='p-1'width='580px' height='188px' src={fifth}/>
    </div> */}

    </div>
  )
}
export default promo1