import React, { useState, useEffect } from 'react'
import CharacterCard from '../card/CharacterCard'
import Popular from '../popular/Popular'
import Header from '../header/Header'
import axios from 'axios'
import Luke from '../../assests/character-1.jpg'
import CThirty from '../../assests/character-2.jpg'
import Character3 from '../../assests/character-3.jpg'
import Character4 from '../../assests/character-4.jpg'
import SelectTagInput from '../selectTagInput/SelectTagInput'

const characterPictures = [Luke, CThirty, Character3, Character4]

const generateRandom = () => Math.floor(Math.random() * 3) + 1  


function CharacterPage(props) {
  const [characters, setCharacters] = useState('');
  
  const filterGender = (e) => {
    const gender = e.target.value
    const genderToDisplay = characters.filter(character => {
      return character.gender === gender;
    })

    setCharacters(genderToDisplay)

  }

  useEffect(() => {
    axios.get('https://swapi.co/api/people').then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results)
    }
    ).catch(err => {
      console.log(err)
    })
  }, [])

  if (!characters) return ''

  return (
    <>
      <Header page="characters" />
      <div className="mt-lg-5 container">
        <Popular subject="Popular Characters" />
      </div>
      <div className="">
      <SelectTagInput onChange={filterGender}/>
      </div>
      <div className="d-flex !important justify-content-center flex-wrap characters-display">
        {
          characters.map((character,index) => {
            return (
              <CharacterCard props={character.url} key={index} name={character.name} gender={character.gender} birth_year={character.birth_year} imageSource={characterPictures [generateRandom() ]}  />
            )
          })
        }
      </div>
    </>

  )

}

export default CharacterPage;