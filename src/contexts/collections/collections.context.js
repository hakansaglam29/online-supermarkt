import { createContext } from 'react';
import PRODUCT_DATA from './product.data';
const CollectionsContext = createContext(PRODUCT_DATA);

export default CollectionsContext;