import "./sidebar-item.styles.scss";
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cart/cart.provider";

const SidebarItem = ({ cName, icon, title, path }) => {
    const { sidebar, showSidebar } = useContext(CartContext);
    const history = useHistory();

    return (
        <div
            className={cName}
            onClick={() => {
                history.push(`${path}`);
                if (sidebar) {
                    showSidebar()
                };
            }}
        >
            <div>
                {icon}
                <span
                    className={sidebar ? 'title' : 'title-undisplay'}
                >{title}</span>
            </div>
        </div>
    )
}
export default SidebarItem;