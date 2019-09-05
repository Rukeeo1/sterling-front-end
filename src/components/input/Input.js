import React, {useState, useEffect, useRef} from 'react';
import Starship1 from '../../assests/character-1.jpg';

import axios from 'axios';
import Luke from '../../assests/character-1.jpg'
import CThirty from '../../assests/character-2.jpg'
import Character3 from '../../assests/character-3.jpg'
import Character4 from '../../assests/character-4.jpg'

import './css/Input.css'

const characterPictures = [Luke, CThirty, Character3, Character4]

const generateRandom = () => Math.floor(Math.random() * 3) + 1  

function Input(props) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const timeoutRef = useRef(null)
  let apiToCall;
  useEffect(() => {
    if(timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if(searchValue !== '') {
        searchHandler();
      } else {
        // resetDisplayHandler();
      }
    }, 500)
  }, [searchValue]);
    if(props.searchtype === 'starship') {
      apiToCall = 'https://swapi.co/api/starships';
    }
    if(props.searchtype === 'characters') {
      apiToCall = 'https://swapi.co/api/people';
    }
    function searchHandler()  {
      if(props.searchtype === 'starship') {
        axios({
          method: 'GET',
          url: `${apiToCall}/?search=${searchValue}`
          }).then(response => {
            setSearchResult(response.data.results);
          });
      }
      if(props.searchtype === 'characters') {
        axios({
          method: 'GET',
          url: `${apiToCall}/?search=${searchValue}`
          }).then(response => {
            setSearchResult(response.data.results);
          });
      }
    }
    useEffect(() => {
      let displayArea;
      if(props.searchtype === 'starship') {
        displayArea = document.querySelector('.starship-flex');
      }
      else if(props.searchtype === 'characters') {
       displayArea = document.querySelector('.characters-display');
      }
      let results = searchResult.map(item => {
        let url = item.url.split('/');
        let secondToLast = url.length - 2;
        let urlNumber = url[secondToLast];
        
        if(props.searchtype === 'starship') {
          return `<div class='card shadow' ><img class="card-img-top" src=${Starship1} alt="Card image" style="width: 100%" /><div class="card-body pl-3 pb-2 border border-right-0"><h4 class="card-title mb-1" style="font-size:20px">${item.name}</h4><p class="card-text mb-lg-0 mt-3px">Model: ${item.model},</br>Manufacturer: ${item.manufacturer},</br> Cost in Credit: ${item.cost_in_credits}</p><a href="/starship/${urlNumber}" class="btn btn-primary mt-lg-0 pl-4 pr-4" >Read More<i class="fas fa-arrow-right ml-2" ></i></a></div></div>`;
        }
        if(props.searchtype === 'characters') {
          return `<div class="card shadow" style="width: 36rem"><div class="row m-0"><div class="col p-0"><img src=${characterPictures[generateRandom()]} class="w-100 h-100 h-sm-100" /></div><div class="col p-0 py-4"><div class="card-block px-3"><h4 class="card-title">${item.name}</h4><p class="card-text">${item.name}, a force sensitive human male, was a legendary Jedi Master who fought in the Galatic Civil War during the reign of tje Galatic Empire<span className="character-readmore-tag"><Link to={/character/${item.url} >...ReadMore</Link></span></p></div></div></div></div>`;
        }
      });
      if(results.length || searchValue.length) {
        displayArea.innerHTML = results.join('');
      }
    }, [searchResult])
  return (
    <div className="search">
      <span className="fa fa-search" id="search"></span>
      <input className="p-2 rounded" placeholder="Enter Search Term"  id="search-bar" onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Input;