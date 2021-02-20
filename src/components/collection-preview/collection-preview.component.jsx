import './collection-preview.styles.scss'
import useWindowDimensions from '../window-dimensions/window-dimensions.component';
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cart/cart.provider";
import CollectionItem from '../collection-item/collection-item.component';
import { useContext } from 'react';


const CollectionPreview = ({item}) => {
    const { sidebar, showSidebar } = useContext(CartContext);
    const { width } = useWindowDimensions();
    const history = useHistory();
    const item_key = Object.keys(item.items).map(key => item.items[key])
    return (
        <div>
            <div className='title-container'>
                <h2 className='title' >{item.title}</h2>
                <p
                onClick={() => {
                    history.push(`/${item.routeName}`);
                    if (sidebar) {
                        showSidebar()
                    };
                }}
                >Show all ></p>
            </div>
            <div className='items-container'>
                {item_key
                    .filter((e, index) => 
                        {if (width>1400) {
                            return index<9   
                        } else if (width>1200) {
                            return index<7
                        } else if (width>880) {
                            return index<5
                        } else if (width>700) {
                            return index<4
                        } else if (width>500){
                            return index<3
                        } else {
                            return index<2
                        }
                    }
                    )
                    .map(e => (
                        <CollectionItem key={e.id} e={e} />
                    )
                    )}
            </div>
        </div>
    )
}

export default CollectionPreview;