import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';

import './cart-item.styles.scss';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity, unit }, cartItem }) => {

  const { addItem, removeItem, clearItemFromCart  } = useContext(CartContext)
  
  return (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
    </div>
    <div className='account-wrapper'>
      <div className='account-upper'>
        <div className='account' onClick={() => removeItem(cartItem)}>
        <span >-</span>
        </div>
        <span>{quantity}</span>
        <div className='account' onClick={() => addItem(cartItem)}>
        <span >+</span>
        </div>
      </div >
      <div className='unit'>
        <span>
          {unit}
        </span>
      </div>
    </div>
    <div>
      <span className='price'>
        {price*quantity} €
      </span>
    </div>
    <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
    &#10005;
  </div>

  </div>
)};

export default CartItem;
