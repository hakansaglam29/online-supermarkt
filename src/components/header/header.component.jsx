import { useContext } from 'react';
import { HeaderContext } from "../../App";
import SidebarDirectory from '../sidebar-directory/sidebar-directory.component';
import Menu from '../../assets/icons/menu'
import SearchBar from '../search-bar/search-bar.component'
import Shop from '../shop-button/shop-button.component'
import './header.styles.scss';
import { Link } from 'react-router-dom';


function Header() {

    const { showSidebar } = useContext(HeaderContext);

    return (
        <>
            <div className='navbar'>
                <div className='menu'>
                    <div className='menu-bars' id='item-1'>
                        <Menu onClick={showSidebar} />
                        <span onClick={showSidebar} >All Catagories</span>
                    </div >
                    <div id='item-2'>
                        <SearchBar  />
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
                        <Shop />
                    </div>
                </div>
            </div>
            <SidebarDirectory/>
        </>
    )
}
export default Header;
