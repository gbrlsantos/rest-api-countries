import React, { useState } from 'react';

/* context */
import { useRegionFilter } from '../Context/RegionFilter';

/* material ui */
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FilterSelect = () => {
    const { region, setRegion } = useRegionFilter()
    const handleRegionChange = (e) => {
        setRegion(e.target.value)
    }
    return(
        <Select
            displayEmpty
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={region}
            onChange={handleRegionChange}
        >
            <MenuItem value="">Filter by Region</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"america"}>America</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"oceania"}>Oceania</MenuItem>
        </Select>
    )
}

export default FilterSelect;