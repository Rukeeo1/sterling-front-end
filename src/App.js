import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.js'
import Starships from './components/starships/Starships'
import ViewMore from './components/viewmore/Viewmore'
import Popular from './components/popular/Popular'
import Characters from './components/characters/Characters'
import StarshipPage from './components/starshippage/Starship.page'
import './App.css';

const Homepage = () => {
  return (
    <>
      <Header />
      <Popular subject="Popular Ships" />
      <Starships />
      <ViewMore />
      <br></br>
      <br></br>
      <Popular subject="Popular Characters" />
      <Characters />
    </>

  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/starship" exact component= {StarshipPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
