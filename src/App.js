import React from 'react';
import Header from  './components/header/Header.js'
import Starships from './components/starships/Starships'
import ViewMore from './components/viewmore/Viewmore'

import Popular from './components/popular/Popular'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Popular />
     <Starships />
     <ViewMore />
    </div>
  );
}

export default App;
