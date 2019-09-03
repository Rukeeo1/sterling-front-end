import React from 'react';
import Card from '../card/Card'
import Luke from '../../assests/character-1.jpg'
import CharacterCard from '../card/CharacterCard'
import './css/Characters.css'

function Characters() {
  //if homepage render four...and hide pagination

  return (
    <section className="d-flex !important justify-content-center flex-wrap ">
     <CharacterCard  imageSource={Luke}/>
     <CharacterCard  imageSource={Luke}/>
     <CharacterCard  imageSource={Luke}/>
     <CharacterCard  imageSource={Luke}/>
    </section>

  )
}

export default Characters;