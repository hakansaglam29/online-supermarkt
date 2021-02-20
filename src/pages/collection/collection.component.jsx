import CollectionsContext from '../../contexts/collections/collections.context';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import Category from '../../components/category/category.component';


import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const { sidebar } = useContext(CartContext);
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.id]
  const collection_list = Object.keys(collection).map(key => collection[key])
  const items = Object.keys(collection_list[3]).map(key => collection_list[3][key])

  return (
    <div className={sidebar ? 'collection-page active' : 'collection-page'}>
      <Category title={collection_list[1]}/>
      <div className = 'items-wrapper'>
        <p className = 'item-title'>Home Page > <span>{collection_list[1]}</span></p>
        <div className='items'>
          {items.map(e => (
            <CollectionItem key={e.id} e={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;