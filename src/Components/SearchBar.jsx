import React, { useState } from 'react';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchParam] = useState(["capital", "name"])

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