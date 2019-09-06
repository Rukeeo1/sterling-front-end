import React, {useEffect, useState} from 'react'
import starship1 from '../../assests/starship-1.jpg'
import ButtonGroup from '../buttonGroups/ButtonGroups'
import Spinner from '../spinner/Spinner'
import './css/Starship.css'
import Card from '../card/Card.js'
import axios from 'axios';



function Starships(){
  const [starships, setStarships] = useState('');
  const [loading, setLoading] = useState(false)
  console.log(starships,'these are')

  useEffect(()=> {
    setLoading(true)

    axios.get('https://swapi.co/api/starships/').then(res => {
      console.log('response', res)
      const ships = res.data.results.slice(0,6) 
      setLoading(false)
      setStarships(ships)
    }
    ).catch(err =>{
      console.log(err)
    })
  },[])

  if(loading) return <Spinner />

  if(!starships) return ''
  
  return (
    <>
    <div className="d-flex justify-content-between starship-flex">
      {
        starships.map((ship, index) => {
          return (
            <Card key={index} wrappingDiv="card shadow" objectName={ship.name} imageSource={starship1} description={`The ${ship.name} is a modified ${ship.model} light weight manufactured by the ${ship.manufacturer}`} readmorestyle="space-ship-readmore" url={ship.url} style={{marginTop:"20px"}}/>
          )
        })
      }
   
   </div>

   </>
  )
}

export default Starships;