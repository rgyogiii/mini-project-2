import React from 'react'
import { useCart } from 'react-use-cart'
import './cart.css'

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

      <div className='py-4 container cart' style={{marginTop:100}}>
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Total Items: {totalItems}</h1>
          <table className='table table-light table-hover m-0'>
          <tbody>
            {items.map((item, index)=>{
              return(
              <tr key={index}>
                <td>
                <img src={item.imageName} style={{height: '6rem'}}/>
                </td>
                <td>{item.title}</td>
                <td>₱{item.price.toLocaleString()}</td>
                <td>QTY:{item.quantity}</td>
                <div className='d-flex'>
                  <button className='btn btn-secondary ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>
                <i class="bi bi-dash"></i>
                </button>
                <button className='btn btn-secondary ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>
                <i class="bi bi-plus"></i>
                </button>
                <button className='btn btn-secondary ms-2' onClick={()=> removeItem(item.id)}>
                <i class="bi bi-trash3-fill fs-6 trash"></i>
                </button>
                </div>
               
              </tr>)

            })}
          </tbody>
            
          </table>

        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: ₱{cartTotal.toLocaleString()}</h2>
        </div>
        <div  className='m-2 d-flex justify-content-between'>
          <button className='btn btn-danger' onClick={()=> emptyCart()}>Clear Cart</button>
          <button className='btn btn-secondary w-25'>CHECKOUT</button>
        </div>
      </div>
    </div>
    
    </div>

  )
}

export default Cart