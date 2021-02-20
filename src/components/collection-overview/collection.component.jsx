import CollectionsContext from '../../contexts/collections/collections.context';
import { useContext} from 'react';
import './collection.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])
  const collection_list = Object.keys(collections).map(key => collections[key])
  return (
    <div className='collection-container'>
      {collection_list.map(item => (
        <CollectionPreview key={item.id} item={item}/>
      )
    )}
    </ div>
  );
};

export default CollectionsOverview;