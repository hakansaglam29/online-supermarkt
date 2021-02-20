import React, { useContext} from 'react';
import CollectionsContext from '../../contexts/collections/collections.context';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CartContext } from "../../providers/cart/cart.provider";
import './search.styles.scss';

export default function SearchPage() {
    const collectionsMap = useContext(CollectionsContext);
    const collection = Object.keys(collectionsMap).map(key => collectionsMap[key])
    const collections = Object.keys(collection).map(key => collection[key])
    const { inputData, sidebar } = useContext(CartContext);

    return (
        <div className={sidebar ? 'search-container active' : 'search-container'}>
            <p className='item-title'>Homepage > <span>Search</span></p>
            <div>
                {collections
                    .map(item => (
                        <div className='items-search' key={item.id}>
                            {Object.keys(item.items).map(key => item.items[key])
                                .filter(e => e?.name?.toLowerCase().includes(inputData.toLowerCase()))
                                .map(e => (
                                    <CollectionItem key={e.id} e={e} />
                                )
                                )
                            }
                        </div>
                    ))}
            </div>
        </div>
    )
}