import React from 'react'
import './Productlist.css'
import Bestsellercard from '../../homepage/bestseller/Bestsellercard'
import Bestsellerdata from '../../homepage/bestseller/Bestsellerdata'
import Productlistfilter from './Productlistfilter'
import Discount from './Productlistdiscount'
import Productlistitem from './Productlistitem'
import Productlistdiscount from './Productlistdiscount'


const Productlist = () => {
  return (
    <>
      <Productlistitem />
      <Productlistdiscount />
    </>
  )
}

export default Productlist