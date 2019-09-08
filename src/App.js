import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.js'
import Starships from './components/starships/Starships'
import ViewMore from './components/viewmore/Viewmore'
import Popular from './components/popular/Popular'
import Characters from './components/characters/Characters'
import StarshipPage from './components/starshippage/Starship.page'
import CharacterPage from './components/characterpage/CharacterPage'
import ReadMoreAboutStarships from './components/readmore/ReadMoreStarShips'
import CardCarousel from './components/carousels/StarshipCarousel'
import ReadMoreHeader from './components/readmore/ReadMorePageHeader'
import ReadMoreAboutPeople from './components/readmore/ReadMoreCharacters'

import ReadMorePageHeader from './components/readmore/ReadMorePlanets'
import './App.css';

const Homepage = () => {
  return (
    <>
      <Header page="homepage" />
      <Popular subject="Popular Ships" />
      <Starships />
      <ViewMore page="starship"/>
      <br></br>
      <br></br>
      <div class="container" style={{color:"white"}}> <CardCarousel /></div>
      <Popular subject="Popular Characters" />
      <Characters />
      <ViewMore page="characters"/>
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
          <Route path="/characters" exact component={CharacterPage} />
          <Route path="/starships/:id" component={ReadMoreAboutStarships} />
          <Route path="/people/:id" component={ReadMoreAboutPeople} />
          {/* <Route path="/readmore" component={ReadMoreHeader} /> */}
          <Route path="/planets/:id" component={ ReadMorePageHeader} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
