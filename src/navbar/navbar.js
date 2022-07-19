import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className="navbar navbar-expands-lg navbar-light d-flex flex-row">
      <div className="container">
        
        {/* searchbox */}
        <form className="d-flex m-0 d-flex align-items-center px-1 me-auto searchContainer" role="search">
          <a href="###">
            <button className="btn pe-2 search-btn">
              <i className="bi bi-search"></i>
            </button>
          </a>
          <input
            className="form-control border border-0 searchbox px-1"
            type="search"
            placeholder="Search here..."
            />
        </form>

        {/* logo */}
        <a className="navbar-brand" href="###">
          <img src={process.env.PUBLIC_URL+"logo.svg"} height="60" alt="Araktek Logo"/>
        </a>

        {/* navlist */}
        <ul className="navbar-nav d-flex flex-row d-flex align-items-end ms-auto">
          <li className="nav-item me-4">
            <a className="nav-link" href="###">
              <i className="bi bi-suit-heart"></i>
            </a>
          </li>
          <li className="nav-item me-4">
            <a className="nav-link" href="###">
              <i className="bi bi-cart3"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="###">
              <i className="bi bi-person-circle me-0"></i>
              <i className="bi bi-caret-down-fill ms-1"></i>
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default navbar