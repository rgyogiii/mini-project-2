import React from 'react'
import Bestsellercard from '../../homepage/bestseller/Bestsellercard'
import Bestsellerdata from '../../homepage/bestseller/Bestsellerdata'
import Productlistbreadcrumb from './Productlistbreadcrumb'
import Productlistfilter from './Productlistfilter'


const Productlistitem = () => {
  return (
    <div className='container mt-4'>
      <Productlistbreadcrumb />
      <div>
        <Productlistfilter /> 
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

export default Productlistitem