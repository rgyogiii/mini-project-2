import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import './cart.css'
import Modal from './modal.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Cart = () => {
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
  const [modalOpen, setModalOpen] = useState(false);


  if(isEmpty){
    return(
      <div className=''>
      <div className='d-flex justify-content-center empty-cart'>
        <h1>Your Cart is Empty</h1>
      </div>
      </div>
    )
  }

  return (
    <div>
      <div className='d-flex justify-content-center'>{modalOpen && <Modal setOpenModal={setModalOpen} />}</div>
      <div className='cart-summary py-4 container-fluid cart d-flex'> 
      <div className="row">      
        <div className="col-10 table-summary">
          <h1>Total Items- {totalItems}</h1>
          <table className='table table-light m-0'>
          <tbody>
            {items.map((item, index)=>{
              return(
              <tr key={index}>
                <td>
                <img src={item.imageName} style={{height: '6rem'}}/>
                </td>
                <td className="align-middle text-title">{item.title}</td>
                <td className="align-middle">₱{item.price.toLocaleString()}</td>
                <td className="align-middle">QTY:{item.quantity}</td>
                <div className='d-flex mt-4 cart-btn'>
                  <button className='btn btn-secondary ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>
                <i class="bi bi-dash"></i>
                </button>
                <button className='btn btn-success ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>
                <i class="bi bi-plus"></i>
                </button>
                <button className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>
                <i class="bi bi-trash3-fill fs-6 trash"></i>
                </button>
                </div>
               
              </tr>)
                
            })}
            
          </tbody>
           <button className='btn btn-danger clear-btn mt-5' onClick={() => {setModalOpen(true)}} >Clear Cart</button>
          </table>         
        </div>
      </div>   
      <div className="cart-total mx-3">
        <div className='cart-box container bg-light'>
        <div className='pt-3 px-4 d-flex justify-content-center'><h4>Cart totals</h4></div>
        <div className='d-flex justify-content-between px-3 mt-3'>
          <h5>Subtotal</h5>
          <h5>₱{cartTotal.toLocaleString()}</h5>
        </div>
        <hr/>
        <div className='shipping d-flex justify-content-between'>
          <div className='px-3'><h4>Shipping</h4></div>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Shipping Methods</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="free"
                  name="radio-buttons-group">
                  <FormControlLabel value="free" control={<Radio />} label="Free shipping" />
                  <FormControlLabel value="pickup" control={<Radio />} label="Local pickup" />
                </RadioGroup>
              </FormControl>
          </div> 
        </div>
        <hr />
        <div className="total-summary d-flex justify-content-between mt-5">
          <div className='px-3'><h4>Total</h4></div>
          <div>
            <h3 className='fw-bold'>₱{cartTotal.toLocaleString()}</h3>
            <div className='d-flex justify-content-center'><h6 className='text-muted'>(includes tax)</h6></div>
          </div>
        </div>
        <Link to='/checkout'>
         <div className='d-flex justify-content-center mt-3'>
          <button className='btn btn-dark w-50 checkout-btn'>Proceed to Checkout</button>
          </div>
           </Link> 
        </div>

      </div>
    </div> 
    </div>
     


  )
}

export default Cart


