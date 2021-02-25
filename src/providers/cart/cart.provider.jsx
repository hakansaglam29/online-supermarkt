import React, {useState, createContext, useEffect} from 'react';
import useWindowDimensions from '../../components/window-dimensions/window-dimensions.component';

import { 
    addItemToCart, 
    removeItemFromCart, 
    filterItemFromCart,
    getCartItemsCount,
    getTotal 
        } from './cart.utils';

export const CartContext = createContext({
    inputData:'b',
    hidden:true,
    setInputData: () => { },
    toggleHidden : () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0,
    total: () => { },
    sidebar: true,
    showSidebar: () => { },
});

const CartProvider = ({ children }) => {
    const { width } = useWindowDimensions();
    const [inputData, setInputData] = useState('')
    const [sidebar, setSidebar] = useState((width<1060) ? false : true)
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)

    const showSidebar = () => setSidebar(!sidebar)
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
                total,
                sidebar,
                showSidebar,
                inputData,
                setInputData,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;