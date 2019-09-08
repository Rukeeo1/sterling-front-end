import React,{useEffect, useState} from 'react'
import './css/ReadMorePageHeader.css'
import {Link} from 'react-router-dom'
import starwarslogo from '../../assests/logo.png'
import Luke from '../../assests/character-1.jpg'
import CThirty from '../../assests/character-2.jpg'
import Character3 from '../../assests/character-3.jpg'
import Character4 from '../../assests/character-4.jpg'
import planets1 from '../../assests/planet-1.jpg';
import planets2 from '../../assests/planet-2.jpg';
import planets3 from '../../assests/planet-3.jpg';
import starship1 from '../../assests/starship-1.jpg';
import starship2 from '../../assests/starship-2.jpg'
import Spinner from '../spinner/Spinner'



export const characters = [CThirty, Character3, Character4];
export const planets = [planets1, planets2, planets3];
export const ships = [starship1, starship2, starship1,]


const x = () => {
  const arr = [1, 1, 1]
  return arr.map(item => {
    return (
      <div className="carousel-item active">
        <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="Los Angeles" width="1100" height="500" />
        <div className="carousel-caption">
          <img src={starwarslogo} className="star-wars-logo" />
          <p>We had such a great time in LA!</p>
        </div>
      </div>)
  })
}

const ReadMoreHeader = (props) => {

  if(!props.page)return ''

  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner hello-rukee">
          <div className="carousel-item active" >
            <img src={props.page[0]} alt="Los Angeles" className="img-fluid" />
            <div className="carousel-caption">
             <Link to="/"> <img src={starwarslogo} className="star-wars-logo" /></Link>
              <p><span>[</span>{props.name}<span>]</span></p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src={props.page[1]} alt="Chicago" className="img-fluid" />
            <div className="carousel-caption">
            <Link to="/"> <img src={starwarslogo} className="star-wars-logo" /></Link>
              <p><span>[</span>{props.name}<span>]</span></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.page[2]} alt="New York" className="img-fluid"  />
            <div className="carousel-caption">
            <Link to="/"> <img src={starwarslogo} className="star-wars-logo" /></Link>
              <p><span>[</span>{props.name}<span>]</span></p>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon previous"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon next"></span>
        </a>
      </div>
    </>
  )
}

export default ReadMoreHeader;