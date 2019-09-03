import React from 'react';

import Header from  './components/header/Header.js'
import Starships from './components/starships/Starships'
import ViewMore from './components/viewmore/Viewmore'
import Popular from './components/popular/Popular'
import Characters from './components/characters/Characters'
import StarshipPage from './components/starshippage/Starship.page'

import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Popular />
     <Starships />
     <ViewMore />
     <br></br>
      <br></br>
     <Popular subject="Characters" />
     <Characters />
     <StarshipPage />
    </div>
  );
}

export default App;
