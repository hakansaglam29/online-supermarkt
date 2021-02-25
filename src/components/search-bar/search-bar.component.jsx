import { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';
import SearchIcon from '../../assets/icons/SearchIcon'
import './search-bar.styles.scss';
import { useHistory } from 'react-router-dom';

function SearchBar() {
    const { setInputData, inputData } = useContext(CartContext)
    const history = useHistory();

    return (
        <div className='search'>
            <div className='inputWrapper'>
                <SearchIcon className='searchIcon' />
                <div
                    className='button'
                    onClick={() => history.push('/search')}
                        > Search
                    </div>
                 <input
                    placeholder='Search product...'
                    className='input'
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                />
            </div>
        </div>
    )
}
export default SearchBar;