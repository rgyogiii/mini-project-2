import React from 'react'
import './cart.css'
import { useCart } from 'react-use-cart'
import item from './cart'
const Modal = ({ setOpenModal }) => {
    const { 
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 style={{cursor: 'none'}}>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            CANCEL
          </button>
          <button onClick={()=> emptyCart()}>YES</button>
        </div>
      </div>
    </div>
  );
}


export default Modal