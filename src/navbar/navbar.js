import React from 'react';
import logo from '';


const navbar = () => {
  return (
    <div className="navbar navbar-expands-lg navbar-light">
      <div className="container">
        
        {/* searchbox */}
        <form className="d-flex m-0" role="search">
          <input
            className="form-control border border-0"
            type="search"
            placeholder="Search here..."
            />

          <a href="###">
            <button className="btn px-2">
              <i className="bi bi-search"></i>
            </button>
          </a>
        </form>

        {/* logo */}
        <a className="navbar-brand" href="###">
          <img src={logo} height="50" alt="Araktek Logo"/>
        </a>

        {/* navlist */}
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-2">
            <a className="nav-link" href="###">
              <i className="bi bi-suit-heart"></i>
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link" href="###">
              <i className="bi bi-cart3"></i>
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link" href="###">
              <i className="bi bi-person-circle"></i>
              <i class="bi bi-chevron-down"></i>
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default navbar