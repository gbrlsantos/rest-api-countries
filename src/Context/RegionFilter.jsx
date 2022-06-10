import React, { useContext, createContext, useState } from 'react';

const RegionFilterContext = createContext()

export default function RegionFilterProvider({ children }) {
    const [region, setRegion] = useState("");

    return(
        <RegionFilterContext.Provider
            value={{
                region,
                setRegion
            }}>
            { children }
        </RegionFilterContext.Provider>
    )
}

export function useRegionFilter() {
    const context = useContext(RegionFilterContext);
    const { region, setRegion } = context;
    return { region, setRegion };
}