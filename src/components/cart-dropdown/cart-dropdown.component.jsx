import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { CartContext } from '../../providers/cart/cart.provider';

import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const history = useHistory();
  const { cartItems, toggleHidden, cartItemsCount  } = useContext(CartContext)

  return (
    <div className='cart-dropdown'>
      <div className='checkout'>
        <div className='checkout-title'>{cartItemsCount} items in your market basket</div>
        <button
          onClick={() => {
            history.push('/checkout');
            toggleHidden();
          }}
        >
          GO TO CHECKOUT
        </button>
      </div>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
      </div>

    </div>
  )
};

export default CartDropdown;
