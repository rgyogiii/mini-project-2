import React from 'react'

const Productlistbreadcrumb = () => {
  return (
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
  )
}

export default Productlistbreadcrumb