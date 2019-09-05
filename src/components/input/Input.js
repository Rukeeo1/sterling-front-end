import React, {useState, useEffect, useRef} from 'react';
import Starship1 from '../../assests/character-1.jpg';

import axios from 'axios';

import './css/Input.css'

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
    function searchHandler()  {
      axios({
        method: 'GET',
        url: `${apiToCall}/?search=${searchValue}`
        }).then(response => {
          setSearchResult(response.data.results);
        });
    }
    useEffect(() => {
      const displayArea = document.querySelector('.starship-flex');
      let results = searchResult.map(item => {
        let url = item.url.split('/');
        let secondToLast = url.length - 2;
        let urlNumber = url[secondToLast];
        
        return `<div class='card shadow' ><img class="card-img-top" src=${Starship1} alt="Card image" style="width: 100%" /><div class="card-body pl-3 pb-2 border border-right-0"><h4 class="card-title mb-1" style="font-size:20px">${item.name}</h4><p class="card-text mb-lg-0 mt-3px">Model: ${item.model},</br>Manufacturer: ${item.manufacturer},</br> Cost in Credit: ${item.cost_in_credits}</p><a href="/starship/${urlNumber}" class="btn btn-primary mt-lg-0 pl-4 pr-4" >Read More<i class="fas fa-arrow-right ml-2" ></i></a></div></div>`;
      });
      if(results.length || searchValue.length) {
        displayArea.innerHTML = results.join('');
      }
    }, [searchResult])
  return (
    <div className="search">
      <span className="fa fa-search"></span>
      <input placeholder="Search term" id="search-bar" onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Input;