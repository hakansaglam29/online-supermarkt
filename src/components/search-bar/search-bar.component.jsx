import {useContext} from 'react';
import {SearchContext} from '../../providers/search/search.provider';
import Search from '../../assets/icons/SearchIcon'
import './search-bar.styles.scss';
import { Link } from 'react-router-dom';

function SearchBar() {
    const { setInputData, inputData } = useContext(SearchContext);
    return (
        <div className='search'>
            <div className='inputWrapper'>
                 <Search className='searchIcon'/>
                 <Link className='button' to="/search">Search</Link>
                 <input
                    placeholder='Search product...'
                    className='input'
                    value={inputData}
                    onChange={(e) => {
                        setInputData(e?.target?.value)
                    }}
                />   
            </div>
        </div>
    )
}
export default SearchBar;