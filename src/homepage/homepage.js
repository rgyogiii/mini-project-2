import React from 'react'
import Feature from './feature/feature'
import Bestseller from './bestseller/Bestseller'
import Reviews from './reviews/reviews'
import Topbrands from './topbrands/topbrands'

const homepage = () => {
  return (
    <div>
        
        <Feature/>
        <Bestseller />
        <Reviews />
        <Topbrands />
    </div>
  )
}

export default homepage