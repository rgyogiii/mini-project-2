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

  return (
    <div>

        <div className='py-4 container cart' style={{marginTop:200}}>
      <div className="row justify-content-center">
        <div className="col-12">
          <h4>Cart ({totalUniqueItems}) total Items: ({totalItems})</h4>
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

                <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>
                -
                </button>
                <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>
                +
                </button>
                <button className='btn btn-info  ms-2' onClick={()=> removeItem(item.id)}>
                Remove Item
                </button>
              </tr>)

            })}
          </tbody>
            
          </table>

        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: ₱{cartTotal.toLocaleString()}</h2>
        </div>
        <div onClick={()=> emptyCart()} className='btn btn-danger m-2'>Clear Cart</div>
      </div>
    </div>
    
    </div>

  )
}

export default Cart