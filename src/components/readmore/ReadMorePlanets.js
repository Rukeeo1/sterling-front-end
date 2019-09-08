import React, { useEffect, useState } from 'react'
import ReadMorePageHeader from './ReadMorePageHeader'
import { planets } from './ReadMorePageHeader'
import axios from 'axios'




function ReadMorePlanets({match}) {
  const [planet, setPlanet] = useState('')
  const planetId = match.params['id'];

  useEffect(()=>{
    axios.get(`https://swapi.co/api/planets/${planetId}`).then(response => {
      setPlanet(response.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <ReadMorePageHeader page={planets} name={planet.name}/>
      <div className="container">
        <h2 className="mt-5 mb-5">{planet.name}</h2>
        <div className="d-flex">
          <img src={planets[0]} style={{ height: "350px" }} />
          <div>
            <h2 className="pl-5">About Planet:</h2>
            <div>
              <p className="pl-5"><strong className="pr-5">Tempature:</strong>{planet.climate}</p>
              <p className="pl-5"><strong className="pr-5">Population:</strong>{planet.population}</p>
            </div>
            <p className="pl-5 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus repellat dicta numquam itaque, ex sint iste autem? Magnam voluptas accusamus distinctio tempora necessitatibus unde doloremque expedita praesentium itaque quisquam! Culpa voluptas dolorum exercitationem? Aliquid, blanditiis laudantium natus, voluptates quisquam at eius enim, debitis repellendus nesciunt veniam incidunt atque. Ipsum.
            </p>
          </div>
        </div>
        <p></p>

      </div>
    </>
  )
}

export default ReadMorePlanets;