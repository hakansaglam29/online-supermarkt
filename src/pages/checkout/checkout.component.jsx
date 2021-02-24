import React, { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
    const { total, cartItems } = useContext(CartContext);

    return (
        <div className='checkout-page-container'>
            <div className='checkout-title-container'><p>Your Market Basket <span>({cartItems.length} Product)</span></p></div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total-container'>TOTAL: {total.toFixed(2)} Euro</div>
            <div className='warning-container'>
                *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
    </div>
            <p>price={total.toFixed(2)}</p>
        </div>
    )
};

export default CheckoutPage;