import React, { useContext, useState } from 'react';
import { ReactComponent as Unter } from '../../assets/icons/unter.svg';
import { ReactComponent as Over } from '../../assets/icons/over.svg';
import './checkout-item.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity, unit, discount }, cartItem }) => {
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)
    const [ note, setNote ] = useState(true)


    return (
        <div className='checkout-item-wrapper'>
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
                            <span >&#10134;</span>
                        </div>
                        <span>{quantity}</span>
                        <div className='checkout-account' onClick={() => addItem(cartItem)}>
                            <span >&#10133;</span>
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
                        : <p className='colored-price'>{(price * quantity).toFixed(2)} €</p>
                    }
                </div>
                <div className='product-note-title'>
                    <p>Note</p>
                    {note ? <Unter className='note-unter' onClick={() => setNote(false)} />
                    : <Over className='note-unter active' onClick={() => setNote(true)} />}
                </div>
                <div className='checkout-remove-button' onClick={() => clearItemFromCart(cartItem)}>
                    &#10005;
                </div>
            </div>
            <div className={note ? 'product-note active' : 'product-note'}>
                <label for="product-detail">Product Note:</label>
                <textarea
                    id="product-detail"
                    name="product-detail"
                    rows="4" cols="55"
                    maxlength="500" />
            </div>
        </div>

    )
};

export default CheckoutItem;