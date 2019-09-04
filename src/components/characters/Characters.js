import React, {useEffect, useState} from 'react';
import Luke from '../../assests/character-1.jpg'
import CThirty from '../../assests/character-2.jpg'
import CharacterCard from '../card/CharacterCard'
import axios from 'axios'
import './css/Characters.css'

const pictures = [Luke,CThirty, Luke, CThirty]


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
    <section className="d-flex !important justify-content-center flex-wrap ">
     {
       characters.map((character, index)=>{
         return   <CharacterCard key={index} name={character.name} imageSource={pictures[index]} url={character.url}/>
       })
     }
    </section>

  )
}

export default Characters;