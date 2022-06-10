import React from 'react';
import { useSearch } from '../Context/Search';

const SearchBar = () => {
    const { searchValue, setSearchValue } = useSearch()

    return(
        <div>
            <input 
                type='text'
                value={searchValue}
                placeholder='Insert a country...'
                onChange={(e) => { setSearchValue(e.target.value)}}
            />
        </div>
    )
}

export default SearchBar;