import React from 'react'
import Feature from './feature/feature'
import Bestseller from './bestseller/Bestseller'
import Reviews from './reviews/reviews'

const homepage = () => {
  return (
    <div>
        
        <Feature/>
        <Bestseller />
        <Reviews />
    </div>
  )
}

export default homepage