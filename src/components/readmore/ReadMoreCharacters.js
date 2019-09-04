import React, {useEffect, useState} from 'react';
import axios from 'axios'



function MoreAboutCharacters({ match }){
  
const [character, setCharacter] = useState('')

  const characterId = match.params['id'];

  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/${characterId}/`)
    .then(response => {
      console.log(response)
     
    })
    .catch(error => {
      console.log(error.message);
    });
  },[character])
  
  return (
    <h1>Helllo Rukee how are you</h1>
  )
}

export default MoreAboutCharacters;