import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections.context';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CartContext } from "../../providers/cart/cart.provider";
import './search.styles.scss';

export default function SearchPage() {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])
    const {inputData} = useContext(CartContext);
    return (
        <div className='search-container'>
        {collections?.map(item => (
            <div className='items-search' key={item.id}>
                {item.items
                    .filter(e => e?.name?.toLowerCase().includes(inputData.toLowerCase()))
                    .map(e => (
                        <CollectionItem key={e.id} e={e} />
                    )
                    )
                }
            </div>
        ))}
    </div>
    )
}