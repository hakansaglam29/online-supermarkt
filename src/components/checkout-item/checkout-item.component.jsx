import React, { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity, unit, discount }, cartItem }) => {
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)


    return (
        <div className='checkout-item'>

            <div className='checkout-item-details'>
                <div>
                    <img src={`${imageUrl}.jpg`} alt='item' />
                </div>
                <div className='checkout-name'>
                    <p>{name}</p>
                    {discount ? <div className='checkout-discount'>Discount</div> : null}
                </div>
            </div>
            <div className='checkout-account-wrapper'>
                <div className='checkout-account-upper'>
                    <div className='checkout-account' onClick={() => removeItem(cartItem)}>
                        <span >-</span>
                    </div>
                    <span>{quantity}</span>
                    <div className='checkout-account' onClick={() => addItem(cartItem)}>
                        <span >+</span>
                    </div>
                </div >
                <div className='checkout-unit'>
                    <span>
                        {unit}
                    </span>
                </div>
            </div>
            <div className='checkout-price'>
                {discount ?
                    <div>
                        <p><del>{(price * quantity).toFixed(2)} €</del></p>
                        <p className='colored-price'>{(price * quantity * (1 - discount)).toFixed(2)} €</p>
                    </div> 
                    : <span>{(price * quantity).toFixed(2)} €</span>
                }
            </div>
            <div className='checkout-remove-button' onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    )
};

export default CheckoutItem;