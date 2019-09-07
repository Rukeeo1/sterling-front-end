import React,{useEffect, useState} from 'react'
import ReadMorePageHeader from './ReadMorePageHeader'
import { planets } from './ReadMorePageHeader'
console.log(planets,'hello')



function ReadMorePlanets(){
  const [planet, setPlanet] = useState('')
  // const planetId = match.params['id'];
return (
  <>
  <ReadMorePageHeader page={planets} hello="rukee"/>
  <h1>hello rukee how are you doing</h1>
  <div className="container">
    <img src={planets[0]}/>
    <p></p>
    
  </div>
  </>
)
}

export default ReadMorePlanets;