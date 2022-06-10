import React, { useContext, createContext, useState } from 'react';

const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");

    return(
        <SearchContext.Provider
            value={{
                searchValue,
                setSearchValue
            }}>
            { children }
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext);
    const { searchValue, setSearchValue } = context;
    return { searchValue, setSearchValue };
}