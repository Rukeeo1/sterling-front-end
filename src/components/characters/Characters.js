import React, {useEffect, useState} from 'react';
import CThirty from '../../assests/character-2.jpg'
import CharacterFour from '../../assests/character-4.jpg'
import CharacterCard from '../card/CharacterCard'
import axios from 'axios'
import './css/Characters.css'

const pictures = [ CThirty ,CharacterFour,  CThirty , CharacterFour]


function Characters() {
  const [characters, setUseCharacters] = useState()
  
  useEffect(()=> {
    axios.get('https://swapi.co/api/people/').then(res=> {
      const characters = res.data.results.slice(0,4) 
      setUseCharacters(characters)
    }).catch(err=> {
      console.log(err)
    })
  },[])

  if(!characters) return ''

  return (
    <section className="d-flex !important justify-content-center w-sm-75 w-75 m-auto flex-wrap ">
     {
       characters.map((character, index)=>{
         return   <CharacterCard key={index} name={character.name} imageSource={pictures[index]} url={character.url} gender={character.gender} birth_year={character.birth_year}/>
       })
     }
    </section>

  )
}

export default Characters;