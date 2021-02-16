import { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import SidebarDirectory from '../sidebar-directory/sidebar-directory.component';
import Menu from '../../assets/icons/menu'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import SearchBar from '../search-bar/search-bar.component'
import CardIcon from '../cart-icon/cart-icon.component'
import './header.styles.scss';
import { Link } from 'react-router-dom';


function Header() {
    const { hidden, showSidebar } = useContext(CartContext);
    
    return (
        <>
            <div className='navbar' >
                <div className='menu'>
                    <div className='menu-bars' id='item-1'>
                        <Menu onClick={showSidebar} />
                        <span onClick={showSidebar} >All Catagories</span>
                    </div >
                    <div id='item-2'>
                        <SearchBar />
                    </div>

                    <div id='item-3'>
                        <Link to='#' className='register'>
                            <span>Register</span>
                        </Link>
                        <span>|</span>
                        <Link to='#' className='login'>
                            <span>Login</span>
                        </Link>
                    </div>
                    <div id='item-4'>
                        <CardIcon />
                    </div>
                </div>
            </div>
            <SidebarDirectory />
            <div className='dropdown-wrapper'>
                {hidden ? null : <CartDropdown />}
            </div>
        </>
    )
}
export default Header;
