import React from 'react';
import './app.css';
import NavBar from './navbar/navbar'
import SearchBox from './search-box/search-box'

function App() {
  return (
    <div>
      <NavBar />

      <main>
        <SearchBox/>
      </main>
    </div >
  );
}

export default App;