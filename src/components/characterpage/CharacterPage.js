import React, { useState, useEffect } from 'react'
import CharacterCard from '../card/CharacterCard'
import Popular from '../popular/Popular'
import Header from '../header/Header'
import axios from 'axios'
import Luke from '../../assests/character-1.jpg'
import CThirty from '../../assests/character-2.jpg'
import Character3 from '../../assests/character-3.jpg'
import Character4 from '../../assests/character-4.jpg'

const characterPictures = [Luke, CThirty, Character3, Character4]

const generateRandom = () => Math.floor(Math.random() * 4) + 1  


function CharacterPage(props) {
  const [characters, setCharacters] = useState('');

  useEffect(() => {
    axios.get('https://swapi.co/api/people').then(res => {
      setCharacters(res.data.results)
    }
    ).catch(err => {
      console.log(err)
    })
  }, [])

  if (!characters) return ''

  return (
    <>
      <Header />
      <div className="mt-lg-5">
        <Popular subject="Popular Characters" />
      </div>
      <div className="d-flex !important justify-content-center flex-wrap ">
        {
          characters.map(character => {
            return (
              <>
                {
                  characters.map((character, index) => {
                    return <CharacterCard key={index} name={character.name} imageSource={characterPictures [generateRandom() ]}  />
                  })
                }

              </>
            )
          })
        }
      </div>
    </>

  )

}

export default CharacterPage;