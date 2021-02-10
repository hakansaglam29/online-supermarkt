import Search from '../../assets/icons/SearchIcon'
import './search-bar.styles.scss';
import { Link } from 'react-router-dom';

function search() {
    return (
        <div className='search'>
            <div className='inputWrapper'>
                 <Search className='searchIcon'/>
                 <Link className='button'>Search</Link>
                 <input
                    placeholder='Search product...'
                    className='input'
                />   
            </div>
        </div>
    )
}
export default search;