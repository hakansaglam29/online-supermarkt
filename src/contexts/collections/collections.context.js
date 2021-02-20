import { createContext } from 'react';
import PRODUCT_DATA from './productcopy.data';
const CollectionsContext = createContext(PRODUCT_DATA);

export default CollectionsContext;