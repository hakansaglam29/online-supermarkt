import React, { useContext } from 'react';
import { SidebarContext } from "../../providers/sidebar/sidebar.provider";
import Slider from '../../components/slider/slider'
import Specificications from '../../components/specifications/specifications.component';
import Products from '../../components/collection-overview/collection.component';
import useWindowDimensions from '../../components/window-dimensions/window-dimensions.component';
import CollectionPage from '../collection/collection.component';
import './Home.scss'

export default function Home() {
    const { width } = useWindowDimensions();
    const { sidebar } = useContext(SidebarContext);

    return (
        <div
            className={ 
                   (width<980) ? 'homepage-wrapper' :sidebar ? 'homepage-wrapper active' : 'homepage-wrapper'
            }
        >
            <Slider />
            <Specificications />
            <Products />
            <CollectionPage/>
        </div>
    )
}