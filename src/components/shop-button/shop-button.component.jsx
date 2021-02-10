import React from 'react'
import Shopping from '../../assets/icons/shopping'
import KeyboardArrow from '../../assets/icons/keyboardarrow'
import { Link } from 'react-router-dom';
import './shop-button.styles.scss';

 function button() {
    return (
        <div className='shopWrapper'>
            <button>
                <Link to='#'>
                    <Shopping/>
                </Link>
                <Link to='#'>
                    <KeyboardArrow/>
                </Link>
            </button>
        </div>
    )
}
export default button
