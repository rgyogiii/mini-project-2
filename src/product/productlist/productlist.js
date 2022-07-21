import React from 'react'
import './Productlist.css'
import Bestsellercard from '../../homepage/bestseller/Bestsellercard'
import Bestsellerdata from '../../homepage/bestseller/Bestsellerdata'
import Filter from './Filter'

const Productlist = () => {
  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-between'>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active"><a href="#">Filter</a></li>
            <li class="breadcrumb-item"><a href="#">Search</a></li>
          </ol>
        </nav>
      </div>
      <div>
        <Filter /> 
      </div>
      <div className='row justify-content-between'>
          { Bestsellerdata.map((item) =>
    
            <Bestsellercard 
              key={item.id}
              title={item.title}
              price={item.price}
              imageName={item.imageName}
              ratings={item.ratings}
              reviewNum={item.reviewNum}
            />

          )}
        </div>
    </div>
  )
}

export default Productlist