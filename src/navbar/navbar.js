import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className="navbar navbar-expands-lg navbar-light d-flex fixed-top bg-light">
      <div className="container">
          {/* logo */}
          <a className="navbar-brand order-2 me-5 pe-5 d-flex align-items-center" href="###">
            <span className="fs-1">AR</span> 
            <img src={process.env.PUBLIC_URL+"logo.svg"} height="80" alt="Araktek Logo"/>
            <span className="fs-1 px-2">KTEK</span> 
          </a>

          {/* searchbox */}
          <form className="d-flex m-0 px-1 searchContainer order-1 me-auto" role="search">
            <a href="###">
              <button className="btn px-1 search-btn">
                <i className="bi bi-search"></i>
              </button>
            </a>
            <input
              className="form-control border border-0 searchbox px-1 w-100"
              type="search"
              placeholder="Search item here . . ."
              />
          </form>
  

          {/* navlist */}
          <ul className="navbar-nav ps-1 d-flex flex-row ms-auto order-3">
            <li className="nav-item me-3">
              <a className="nav-link" href="###">
                <i className="bi bi-suit-heart"></i>
                <span className="position-absolute translate-middle badge rounded-circle badge-notification">2</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="###">
                <i className="bi bi-cart3"></i>

                {/* badge */}
                <span className="position-absolute translate-middle badge rounded-circle badge-notification">2</span>
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link d-flex align-items-center" href="###">
                <i className="bi bi-person-circle me-0"></i>
                <i className="bi bi-caret-down-fill ms-1"></i>
              </a>
            </li>
          </ul>

          {/* category */}
          <div className="container pt-2 d-flex justify-content-center order-4">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Sale</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Pre-Built PC</a> 
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Laptops</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Consoles</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Peripherals</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Collectibles</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Brands</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold" href="###">Promos</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default navbar