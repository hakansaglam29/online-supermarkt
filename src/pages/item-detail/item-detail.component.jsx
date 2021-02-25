import './item-detail.styles.scss'
import React, { useContext, useState } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import CollectionsContext from '../../contexts/collections/collections.context';

const ItemDetail = ({ match }) => {
    const [visible, setVisible] = useState(true)
    const { sidebar, addItem, removeItem, cartItems } = useContext(CartContext);
    const product = match.url.split("/")[2]
    const product_group = match.url.split("/")[1]
    const collections = useContext(CollectionsContext);
    const collection = collections[product_group];
    const item = Object.keys(collection).map(key => collection[key])[3][product]
    const { title, name, imageUrl, price, discount, unit, brand } = item


    let a = 0
    for (let x of cartItems) {
        if (x.name === name) {
            a = x.quantity
        }
    }



    return (
        <div className={sidebar ? 'item-detail active' : 'item-detail'}>
            <div className='item-detail-title'>
                <p>Home Page > {title} > <span>{name}</span> </p>
            </div>
            <div className='product-info'>
                <div className='item-detail-image'>
                    <img src={`${imageUrl}-1650x1650.jpg`} alt='item' />
                </div>
                <div className='item-detail-info'>
                    <h2 className='name'>{name}</h2>
                    <p className='brand'>Brand: <span>{brand}</span></p>
                    {discount ?
                        <div className='price-detail-discount'>
                            <p><del>{price.toFixed(2)} €</del></p>
                            <p className='discount-p'>{(price * (1 - discount)).toFixed(2)} €</p>
                        </div>
                        :
                        <p className='price-detail'>{price.toFixed(2)} €</p>
                    }
                    <div className='unit-add-wrapper'>
                        <div className='unit-add'>
                            <div className='unit-detail'>
                                <p> {unit}</p>
                            </div>
                            {(visible && !a) ?
                                <button onClick={() => {
                                    addItem(item)
                                    setVisible(false)
                                }}>
                                    Add
                            </button>
                                :
                                <div className='item-detail-add-remove'>
                                    <div
                                        className='item-detail-account'
                                        onClick={() => {
                                            removeItem(item);
                                        }}>
                                        <span >&#10134;</span>
                                    </div>
                                    <span className='detail-count' >{a ? a : setVisible(true)}</span>
                                    <div className='item-detail-account' onClick={() => addItem(item)}>
                                        <span >&#10133;</span>
                                    </div>
                                </div >
                            }
                        </div>
                        <div className='product-detail-text' >
                            <label for="product-detail">How should we prepare your product?</label>
                            <textarea
                                id="product-detail"
                                name="product-detail"
                                rows="4" cols="55"
                                maxlength="1000"
                                placeholder="You can write the details you want to specify." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;