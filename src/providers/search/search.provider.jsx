import React, { useState, createContext} from 'react';
export const SearchContext = createContext({
    inputData: '',
    setInputData: () => {}
});

const SearchProvider = ({ children }) => {
    const [inputData, setInputData] = useState('')

    return (
        <SearchContext.Provider
            value={{
                inputData,
                setInputData
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;