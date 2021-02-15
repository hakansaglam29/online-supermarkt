import React, {useContext} from 'react';
import './collection-item.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ e }) => {

    const { imageUrl, name, price, unit } = e;
    const { addItem } = useContext(CartContext)
    return (

        <div className='item-container'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='name'>
                <p>{name}</p>
            </div>
            <div className='price'>
                <p>{price} €</p>
            </div>
            <div className='unit'>
                <p> {unit}</p>
            </div>
            <button onClick={() => addItem(e)} inverted>
                Add
            </button>
        </div>
    )
}

export default CollectionItem;

