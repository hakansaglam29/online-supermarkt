import React, {useState, createContext, useEffect} from 'react';

import { 
    addItemToCart, 
    removeItemFromCart, 
    filterItemFromCart,
    getCartItemsCount,
    getTotal 
        } from './cart.utils';

export const CartContext = createContext({
    hidden:true,
    toggleHidden : () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0,
    total: () => { },
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = itemToClear => setCartItems(filterItemFromCart(cartItems, itemToClear));
    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setTotal(getTotal(cartItems))
    }, [cartItems])
 
    return (
        <CartContext.Provider
            value={{
                toggleHidden,
                hidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;