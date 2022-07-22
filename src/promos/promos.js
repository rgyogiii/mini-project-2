import React from 'react'

const promos = () => {
    const promoImage = [
    {
        id: 1,
        image: '/img/promos/promo1.jpg'
    },
     {
        id: 2,
        image: '/img/promos/promo2.jpg'
    },
     {
        id: 3,
        image: '/img/promos/promo3.jpg'
    },
     {
        id: 4,
        image: '/img/promos/promo4.jpg'
    },
     {
        id: 5,
        image: '/img/promos/promo5.jpg'
    },
     {
        id: 6,
        image: '/img/promos/promo6.jpg'
    },
     {
        id: 7,
        image: '/img/promos/promo7.jpg'
    },
     {
        id: 8,
        image: '/img/promos/promo8.jpg'
    },
     {
        id: 9,
        image: '/img/promos/promo9.jpg'
    },
     {
        id: 10,
        image: '/img/promos/promo10.jpg'
    },
     {
        id: 11,
        image: '/img/promos/promo11.jpg'
    },
     {
        id: 12,
        image: '/img/promos/promo12.jpg'
    },
     {
        id: 13,
        image: '/img/promos/promo13.jpg'
    },
     {
        id: 14,
        image: '/img/promos/promo14.jpg'
    },
    {
        id: 15,
        image: '/img/promos/promo15.jpg'
    },
     {
        id: 16,
        image: '/img/promos/promo16.jpg'
    },
     {
        id: 17,
        image: '/img/promos/promo17.jpg'
    },
     {
        id: 18,
        image: '/img/promos/promo18.jpg'
    },

]
  return (
    <div className='container mt-5'>
        <div className='d-flex justify-content-center mb-3'>
            <h1>Bundles & Promos</h1>
        </div>
        {promoImage.map((props)=>(
            <div className='d-flex flex-direction-column justify-content-center mb-3'>
                <img style={{cursor:'pointer', minWidth:'375px'}} src={props.image} width='700px' height='300px'/>
            </div>
        ))}
    </div>
  )
}

export default promos