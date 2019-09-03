import React from 'react';
import Header from  './components/header/Header.js'
import Starships from './components/starships/Starships'

import Popular from './components/popular/Popular'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Popular />
     <Starships />
    </div>
  );
}

export default App;
