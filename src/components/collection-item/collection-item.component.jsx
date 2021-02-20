import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './collection-item.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ e }) => {
    const { imageUrl, name, price, unit, path, discount } = e;
    const { addItem } = useContext(CartContext)
    const history = useHistory();
    return (

        <div className='item-container'>
            {discount ?
                <div className='discount'>
                    <p>%{discount * 100}</p>
                    <p>DISCOUNT</p>
                </div>
                : null}

            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl}.jpg)` }}
                onClick={() => history.push(`/${path}`)}
            />
            <div className='name'>
                <p>{name}</p>
            </div>
            {discount ?
                <div className='geld-discount'>
                    <p><del>{price.toFixed(2)}€</del></p>
                    <p>{(price*(1-discount)).toFixed(2)}€</p>
                </div>
                :
                <div className='geld'>
                    <p>{price.toFixed(2)}€</p>
                </div>
        
        
            }
            <div className='unit'>
                <p> {unit}</p>
            </div>
            <button onClick={() => addItem(e)} inverted='true'>
                Add
            </button>
        </div >
    )
}

export default CollectionItem;

