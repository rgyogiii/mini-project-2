import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menuContainer;

  if(showMenu){
    menuContainer=
    <div className="container-fluid menu-container d-flex flex-column justify-content-start">
      <i className="bi bi-x-lg ms-auto p-2" onClick={() => setShowMenu(!showMenu)}></i>

      <div className="container-fluid d-flex justify-content-center my-0">
        <form className="d-flex m-0 px-3 my-3 searchmenu w-100" role="search">
            <a href="###">
              <button className="btn px-1 search-btn">
                <i className="bi bi-search"></i>
              </button>
            </a>
          <input
            className="form-control border border-0 searchbox px-1 w-100"
            placeholder="Search item here . . ."
            />
        </form> 
      </div>

      <div className="list-group d-flex align-items-center menu-list">
        <a className="list-group-item border-0 py-1" href="###">Sale</a>
        <a className="list-group-item border-0 py-1" href="###">Pre-Built PC</a>
        <a className="list-group-item border-0 py-1" href="###">Laptops</a>
        <a className="list-group-item border-0 py-1" href="###">Consoles</a>
        <a className="list-group-item border-0 py-1" href="###">Accessories</a>
        <a className="list-group-item border-0 py-1" href="###">Collectibles</a>
        <a className="list-group-item border-0 py-1" href="###">Brands</a>
        <a className="list-group-item border-0 py-1" href="###">Promos</a>
      </div>
    </div>
  }

  return (
    <div className="navbar navbar-light d-flex fixed-top bg-light">
      <div className="container p-0">
          {/* logo */}
          <a className="navbar-brand order-2 me-5 pe-5 d-flex align-items-center" href="###">
            <span className="fs-1">AR</span> 
              <img src={process.env.PUBLIC_URL+"logo.svg"} alt="Araktek Logo"/>
            <span className="fs-1 px-2">KTEK</span> 
          </a>

          {/* mobile menu */}
          <button 
          className="btn btn-outline-dark vegMenu order-5 p-1 mx-2"
          onClick={() => setShowMenu(!showMenu)}>
            <i className="bi bi-list"></i>
          </button>

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
            <li className="nav-item me-3 heart-icon">
              <a className="nav-link" href="###">
                <i className="bi bi-suit-heart"></i>
                <span className="position-absolute translate-middle badge rounded-circle badge-notif">2</span>
              </a>
            </li>
            <li className="nav-item mx-3 cart-icon">
              <a className="nav-link" href="###">
                <i className="bi bi-cart3"></i>

                {/* badge */}
                <span className="position-absolute translate-middle badge rounded-circle badge-notif">2</span>
              </a>
            </li>
            <li className="nav-item ms-3 user-icon">
              <a className="nav-link d-flex align-items-center" href="###">
                <i className="bi bi-person-circle me-0"></i>
                <i className="bi bi-caret-down-fill ms-1"></i>
              </a>
            </li>
          </ul>

          {/* category */}
          <div className="container pt-2 d-flex justify-content-center order-4 nav-category" id="burgerMenu">
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
      {menuContainer}
    </div>
  )
}

export default Navbar