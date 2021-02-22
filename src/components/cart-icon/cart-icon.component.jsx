import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { CartContext } from '../../providers/cart/cart.provider';
import Shopping from '../../assets/icons/shopping'
import KeyboardArrow from '../../assets/icons/keyboardarrow'
import './cart-icon.styles.scss';

function CartIcon() {
    const { cartItemsCount, toggleHidden, total, hidden } = useContext(CartContext)
    const history = useHistory();
    return (
        <div className='shopWrapper' >
            <div className='dropdown'>
                {(cartItemsCount>0) ? <div className='total'>{total.toFixed(2)} €</div> : null}
                <div  
                    onClick={() => {
                    history.push('/checkout');
                    {if (!hidden) {toggleHidden()}}
                  }}>
                    <Shopping />
                </div>
                <div  onClick={toggleHidden}>
                    <KeyboardArrow />
                </div>
                {(cartItemsCount>0) ? <div className='item-count'>{cartItemsCount}</div> : null}
            </div>
        </div>
    )
}
export default CartIcon;