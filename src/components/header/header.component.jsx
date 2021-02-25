import { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import SidebarDirectory from '../sidebar-directory/sidebar-directory.component';
import Menu from '../../assets/icons/menu'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import SearchBar from '../search-bar/search-bar.component'
import CardIcon from '../cart-icon/cart-icon.component'
import { ReactComponent as Logo } from '../../assets/icons/market_logo.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useWindowDimensions from '../../components/window-dimensions/window-dimensions.component';


function Header() {
    const { hidden, showSidebar } = useContext(CartContext);
    const history = useHistory();
    const { width } = useWindowDimensions();

    return (
        <div className='navbar-wrapper'>
            <div className='navbar' >
                <div className='menu'>
                    <div
                        className='logo' id='item-1'
                        onClick={() => history.push('/')}
                    >
                        <Logo />
                    </div>
                    <div className='menu-bars' id='item-2'>
                        <Menu onClick={showSidebar} />
                        <span onClick={showSidebar} >All Catagories</span>
                    </div >
                    <div id='item-3'>
                        <SearchBar />
                    </div>

                    {(width > 1060) ?
                        <div id='item-4'>
                            <Link to='#' className='register'>
                                <span >Register</span>
                            </Link>
                            <span>|</span>
                            <Link to='#' className='login'>
                                <span>Login</span>
                            </Link>
                        </div>
                        :
                        <div id='item-5'>
                            <p>H</p>
                        </div>}
                    <div id='item-6'>
                        <CardIcon />
                    </div>
                </div>
            </div>
            <SidebarDirectory />
            <div className='dropdown-wrapper'>
                {hidden ? null : <CartDropdown />}
            </div>
        </div>
    )
}
export default Header;
