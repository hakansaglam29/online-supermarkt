import { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import { DirectoryContext } from '../../contexts/directory/directory.context';
import './sidebar-directory.styles.scss';
import SidebarItem from '../sidebar-item/sidebar-item.component';

const SidebarDirectory = () => {
    const { sidebar } = useContext(CartContext);
    const { sections } = useContext(DirectoryContext);
    

    return (
        <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                {sections.map(({ id, ...otherProps }) => (
                    <SidebarItem
                        key={id}
                        {...otherProps} 
                    />
                ))}
            </ul>
        </nav>
    )
}

export default SidebarDirectory;