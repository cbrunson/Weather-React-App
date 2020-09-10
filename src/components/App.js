import React from 'react';
import TopBar from './TopBar';
import TitleBar from './TitleBar';
import SearchBar from './SearchBar';
import BottomBar from './BottomBar';

function App() {
  return (
      <div className="app">
        <main>  
          <TopBar />
          <TitleBar />
          <SearchBar />
{/*           <BottomBar /> */}
      </main>
    </div>
  );
}

export default App;
