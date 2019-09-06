import React from 'react';
import {Link} from 'react-router-dom'

function CharacterCard(props) {
  
const characterId = getId(props)

  // let starshipId = '5'
  if (props.urlId) {
    // characterId = props.urlId;
  }
  //  characterId = getId(props)
  return (
    <div class="card shadow" style={{ width: "36rem" }}>
      <div class="row m-0">
        <div class="col-md-6 p-0" >
          <img src={props.imageSource} style={{height:"286px",width:"275px"}} class="w-100 h-100 h-sm-100" />
        </div>
        <div class="col p-0 py-4" style={{background:"#f2f2f2"}}>
          <div class="card-block px-3" >
            <h4 class="card-title">{props.name}</h4>
            <p class="card-text"><span>Name: </span>{`${props.name}`}</p>
            <p class="card-text"><span>Gender: </span>{`${props.gender}`}</p>
            <p class="card-text"><span>Birth Year: </span>{`${props.birth_year}`}</p>
             <span className="character-readmore-tag d-flex justify-content-end"><Link style={{borderBottom:"2px solid rgb(76, 76, 88)"}}to={`/people/${characterId}`}>...ReadMore</Link></span> 
          </div>
        </div>
      </div>
    </div>
  )
}

function getId(props) {
  if(!props.url) return ''
  const splitPropsUrl = props.url.split('/')
  return splitPropsUrl[5]
}

export default CharacterCard;