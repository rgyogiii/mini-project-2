import React, {useState} from 'react'
import Bestsellercard from '../../homepage/bestseller/Bestsellercard'
import Bestsellerdata from '../../homepage/bestseller/Bestsellerdata'
import Productlistbreadcrumb from './Productlistbreadcrumb'



const Productlistitem = () => {
  const [data,setData] = useState(Bestsellerdata)

  const filterResult = (colorItem) => {   

    const result = Bestsellerdata.filter((curData) => {
      return curData.color===colorItem
    });

    setData(result);
    console.log(result)
  }

  return (
   
    <div className='container mt-4'>
      <Productlistbreadcrumb  filterFunction={(getColor) => filterResult(getColor)} />
      <div className='row justify-content-start'>
          { data.map((item) =>
            <Bestsellercard 
              key={item.id}
              title={item.title}
              price={item.price}
              imageName={item.imageName}
              color={item.color}
              ratings={item.ratings}
              reviewNum={item.reviewNum}
              item={item}
            />
          )}
        </div>
    </div>
  )
}

export default Productlistitem