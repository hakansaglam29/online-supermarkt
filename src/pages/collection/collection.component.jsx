import CollectionsContext from '../../contexts/collections/collections.context';
import { useContext} from 'react';


import  './collection.styles.scss';

const CollectionPage = () => {
  const collections = useContext(CollectionsContext);
 
  
  return (
    <div>
      hello
    </div>
  );
};


export default CollectionPage;