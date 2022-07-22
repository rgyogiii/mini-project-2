import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './navbar.css';
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

const Navbar = ({ setShow, size }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {totalItems} = useCart();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const isOpen = open && Boolean(anchorEl);
  const id = isOpen ? 'openMenu' : undefined;

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
    <ClickAwayListener onClickAway={handleClose}>
      
    <div className="navbar sticky-top navbar-light d-flex bg-light ">
      <div className="container p-0">
          {/* logo */}
             <a className="navbar-brand order-2 me-5 pe-5 d-flex align-items-center" href="###">
              <Link to='/'>
            <span className="fs-1 ms-2">AR</span> 
              <img src={process.env.PUBLIC_URL+"logo.svg"} alt="Araktek Logo"/>
            <span className="fs-1 px-2">KTEK</span> 
                </Link>  
          </a>
          {/* mobile menu */}
          <button 
          className="btn btn-outline-dark vegMenu order-5 p-1 pe-2"
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
            <li className="nav-item me-2 heart-icon">
              <a className="nav-link" href="###">
                <i className="bi bi-suit-heart"></i>
                <span className="position-absolute translate-middle badge">{2}</span>
              </a>
            </li>
            <li className="nav-item mx-3 cart-icon">
              <a className="nav-link" href="###">
              <Link to='/cart'>
                <i className="bi bi-cart3"></i>
              </Link>
                {/* badge */}
                <span className="position-absolute translate-middle badge">{totalItems}</span>
              </a>
            </li>

            <li className="nav-item ">
              <IconButton
                className="d-flex align-items-center" 
                aria-describedby={id} 
                onClick={handleClick}
              >
                <i className="bi bi-person-circle me-0"></i>
              </IconButton>
              <Popper

                id={id} 
                open={open} 
                anchorEl={anchorEl}
                onClose={handleClose}
                placement={'bottom-end'}
                >
                  <Paper elevation={16}>
                    {/* dropdown list */}
                    <MenuItem  onClick={handleClose} className="mx-2">
                      <i class="bi bi-person fs-5"></i><span className="ms-3">Profile</span>
                    </MenuItem>
                    <MenuItem  onClick={handleClose} className="mx-2">
                      <i class="bi bi-gear fs-5"></i><span className="ms-3">Settings</span>
                    </MenuItem>
                    <MenuItem  onClick={handleClose} className="mx-2">
                      <i class="bi bi-box-arrow-right fs-5"></i><span className="ms-3">Logout</span>
                    </MenuItem>
                  </Paper>
              </Popper>
            </li>

          </ul>

          {/* category */}
          <div className="container pt-2 d-flex justify-content-center order-4 nav-category" id="burgerMenu">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Sale</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Pre-Built PC</a> 
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Laptops</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Consoles</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Peripherals</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Collectibles</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav-category" href="###">Brands</a>
              </li>
              <li className="nav-item mx-2">
              <Link to='/promos'>
                <a className="nav-link nav-category" href="###">Promos</a>
              </Link>
              </li>
            </ul>
          </div>

          {menuContainer}
      </div>
      
    </div>
    </ClickAwayListener>
  )
}

export default Navbar