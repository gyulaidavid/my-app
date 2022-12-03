import React from 'react'
import './Cart.css';

function Cart({count}) {
  
 // const {count} = props //ekkor függvényben: function Cart(props)

    return (
    <div className='Cart'>{count}</div>
  )
}

export default Cart