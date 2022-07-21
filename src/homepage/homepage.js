import React from 'react'
import Feature from './feature/feature'
import Bestseller from './bestseller/Bestseller'
import Reviews from './reviews/reviews'
import Topbrands from './topbrands/topbrands'
import Firstpromo from './promo1/promo1'
import Secondpromo from './promo2/promo2'
const homepage = () => {
  return (
    <div>
        <Feature/>
        <Firstpromo/>
        <Bestseller />
        <Secondpromo/>
        <Reviews />
        <Topbrands />
    </div>
  )
}

export default homepage