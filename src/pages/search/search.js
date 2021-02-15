import CollectionsContext from '../../contexts/collections/collections.context';
import SearchContext from '../../providers/search/search.provider';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useContext } from 'react';
import './search.styles.scss';

const Search = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])
    console.log(collections)
    const { inputData} = useContext(SearchContext);

    return (
        <div>
            <div className='collection-container'>
                {collections?.map(item => (
                    <div className='items-container' key={item.id}>
                        {item?.items
                            .filter((e, index) => e.name.includes(inputData)
                            )
                            .map(e => (
                                <CollectionItem key={e.id} e={e} />
                            )
                            )}
                    </div>
                ))}
            </ div>
        </div>
    )
}

export default Search;