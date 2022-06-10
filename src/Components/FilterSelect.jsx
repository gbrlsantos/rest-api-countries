import React from 'react';
import Select from '@mui/material/Select';

const options = [
    {value: 'africa', label: 'Africa'},
    {value: 'america', label: 'America'},
    {value: 'asia', label: 'Asia'},
    {value: 'europe', label: 'Europe'},
    {value: 'oceania', label: 'Oceania'},
]

const FilterSelect = () => {
    return(
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter by Region"
            options={options}
        />
    )
}

export default FilterSelect;