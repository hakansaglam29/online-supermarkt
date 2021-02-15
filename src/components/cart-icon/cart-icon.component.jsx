import React, { useContext } from 'react'
import { CartContext } from '../../providers/cart/cart.provider';
import Shopping from '../../assets/icons/shopping'
import KeyboardArrow from '../../assets/icons/keyboardarrow'
import './cart-icon.styles.scss';

function CartIcon() {
    const { cartItemsCount, toggleHidden, total } = useContext(CartContext)
    return (
        <div className='shopWrapper' >
            <div className='dropdown'>
                {(cartItemsCount>0) ? <div className='total'>{total} €</div> : null}
                <div>
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