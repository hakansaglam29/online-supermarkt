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
  const { items, title } = collection


  return (
    <div className={sidebar ? 'collection-page active' : 'collection-page'}>
      <Category title={title}/>
      <div className = 'items-wrapper'>
        <p className = 'item-title'>Home Page > <span>{title}</span></p>
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