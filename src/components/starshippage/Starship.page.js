import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import Popular from '../popular/Popular'
import Header from '../header/Header'
import axios from 'axios'
import ButtonGroup from '../buttonGroups/ButtonGroups'
import starship1 from '../../assests/starship-2.jpg'
import Spinner from '../spinner/Spinner'

function StarshipPage(props) {
  let [starShips, setStarShips] = useState('');
  let [previousPage, setPreviousPage] = useState(1);
  let [nextPage, setNextPage] = useState(2);
  let [totalPage, setTotalPage] = useState('37')
  const [loading, setLoading] = useState(false)

  const previousPaginationHandler = (e) => {
    if (previousPage < 1) {
      setNextPage(10)
      return;
    }
    setPreviousPage(previousPage--)
    const nextPageValue = ((previousPage - 1) * 10) + (starShips.length);
    setNextPage(nextPageValue);//
  }

  const nextPaginationHandler = (e) => {
    if (nextPage > totalPage) {
      setNextPage('37')
      return nextPage;
    }

    setPreviousPage(previousPage++)
    const nextPageValue = ((previousPage - 1) * 10) + (starShips.length);
    setNextPage(nextPageValue);//
  }

  const api = `https://swapi.co/api/starships/?page=${previousPage}`
  useEffect(() => {
    setLoading(true)
    axios.get(`${api}`).then(res => {
      setTotalPage(res.data.count)
      setStarShips(res.data.results)
      setLoading(false)
    }
    ).catch(err => {
      console.log(err)
    })
  }, [previousPage])

  if (loading) return <Spinner />

  if (!starShips) return ''


  return (
    <>
      <Header page="starship" />
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
      <ButtonGroup previousFunction={() => previousPaginationHandler()} nextFunction={() => nextPaginationHandler()} totalPage={totalPage} previousPage={previousPage} nextPage={nextPage} />
    </>

  )

}

export default StarshipPage;