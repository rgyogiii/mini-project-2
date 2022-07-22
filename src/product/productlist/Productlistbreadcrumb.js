import React, {useState} from 'react'

const Productlistbreadcrumb = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>

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
              <li class="breadcrumb-item active"><a onClick={()=>setShowFilter(!showFilter)}>Filter</a></li>
              <li class="breadcrumb-item"><a href="#">Search</a></li>
              </ol>
          </nav>
      </div>
      <div className={showFilter ? 'row mb-5' : 'row mb-5 d-none'}>
        <div className='col-3 d-flex flex-column'>
            <h6>Sort By</h6>
            <span>Default</span>
            <span>Popularity</span>
            <span>Average rating</span>
            <span>Newness</span>
            <span>Price: Low to High</span>
            <span>Price: High to Low</span>
        </div>
        <div className='col-3 d-flex flex-column'>
            <h6>Price</h6>
            <span>All</span>
            <span>$0 - $50</span>
            <span>$50 - $100</span>
            <span>$100 - $150</span>
            <span>$150 - $200</span>
            <span>$200+</span>
        </div>
        <div className='col-3 d-flex flex-column'>
            <h6>Color</h6>
            <span>Blue</span>
            <span>Brown</span>
            <span>Gray</span>
            <span>Green</span>
            <span>Orange</span>
            <span>White</span>
        </div>
        <div className='col-3'>
            <h6>Tags</h6>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Laptop</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Video Card</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Action Figure</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>PC</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Keyboard</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Monitor</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>Hard Drive</button>
            <button className='btn btn-dark btn-tags me-1 mt-1'>SSD</button>
        </div>
      </div>
    </div>
  )
}

export default Productlistbreadcrumb