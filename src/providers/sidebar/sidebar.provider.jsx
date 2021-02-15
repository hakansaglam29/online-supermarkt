import React, { useState, createContext} from 'react';
import useWindowDimensions from '../../components/window-dimensions/window-dimensions.component';
export const SidebarContext = createContext({
    sidebar: true,
    showSidebar: () => { },
});

const SidebarProvider = ({ children }) => {
    const { width } = useWindowDimensions();
    const [sidebar, setSidebar] = useState((width<1025) ? false : true)
    const showSidebar = () => setSidebar(!sidebar)
   

    return (
        <SidebarContext.Provider
            value={{
                sidebar,
                showSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider;