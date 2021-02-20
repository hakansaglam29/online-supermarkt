import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component'
import ItemDetail from '../item-detail/item-detail.component'

const ShopPage = ({ match }) => {

    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionPage}
            />
            <Route
                path={`${match.url}/:id`}
                component={ItemDetail}
            />
        </div>
    )
}


export default ShopPage;