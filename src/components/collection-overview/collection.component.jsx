import CollectionsContext from '../../contexts/collections/collections.context';
import { useContext} from 'react';
import './collection.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
  const collections = useContext(CollectionsContext);
  
  return (
    <div className='collection-container'>
      {collections.map(item => (
        <CollectionPreview key={item.id} item={item}/>
      ))}
    </ div>
  );
};

export default CollectionsOverview;