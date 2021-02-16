import React, { useContext } from 'react';
import { CartContext } from "../../providers/cart/cart.provider";
import Slider from '../../components/slider/slider'
import Specificications from '../../components/specifications/specifications.component';
import Products from '../../components/collection-overview/collection.component';
import './Home.scss'

export default function Home() {
    const { sidebar} = useContext(CartContext);
    return (
        <div
            className={
                sidebar ? 'homepage-wrapper active' : 'homepage-wrapper'
            }
        >
            <div className='slider-wrapper'>
                <Slider />
                <Specificications className='specific'/>
            </div>
            <Products />
        </div>
    )
}