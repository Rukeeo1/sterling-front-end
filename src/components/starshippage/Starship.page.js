import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import Popular from '../popular/Popular'
import Header from '../header/Header'
import axios from 'axios'
import starship1 from '../../assests/starship-2.jpg'

function StarshipPage(props) {
  const [starShips, setStarShips] = useState('');

  useEffect(() => {
    axios.get('https://swapi.co/api/starships/').then(res => {
      setStarShips(res.data.results)
    }
    ).catch(err => {
      console.log(err)
    })
  }, [])

  if (!starShips) return ''

  return (
    <>
      <Header />
      <div className="mt-lg-5">
        <Popular subject="Popular Starships" />
      </div>
      <div className="d-flex justify-content-between starship-flex">
        {
          starShips.map((ship, index) => {
            return (
              <Card key={index} wrappingDiv="card shadow" objectName={ship.name} imageSource={starship1} description={`The ${ship.name} is a modified ${ship.model} light weight manufactured by the ${ship.manufacturer}`} readmorestyle="space-ship-readmore" style={{ marginTop: "20px" }} />
            )
          })
        }
      </div>
    </>

  )

}

export default StarshipPage;