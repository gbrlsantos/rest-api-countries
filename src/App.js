
import React from 'react'
import Pages from './Components/Pages'

import SearchProvider from './Context/Search'

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Pages />
      </div>
    </SearchProvider>
  );
}

export default App;
