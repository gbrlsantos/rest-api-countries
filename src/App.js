
import React from 'react'
import Pages from './Components/Pages'

import SearchProvider from './Context/Search'
import RegionFilterProvider from './Context/RegionFilter';

function App() {
  return (
    <RegionFilterProvider>
      <SearchProvider>
        <div className="App">
          <Pages />
        </div>
      </SearchProvider>
    </RegionFilterProvider>
  );
}

export default App;
