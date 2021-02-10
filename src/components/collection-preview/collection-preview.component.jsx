import './collection-preview.styles.scss'
import useWindowDimensions from '../window-dimensions/window-dimensions.component';

import CollectionItem from '../collection-item/collection-item.component';



const CollectionPreview = ({item}) => {
    const { width } = useWindowDimensions();
    return (
        <div>
            <div className='title-container'>
                <h2 className='title' >{item.title}</h2>
            </div>
            <div className='items-container'>
                {item.items
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