import React from 'react';


function CharacterCard(props) {
  return (
    <div class="card shadow" style={{ width: "36rem" }}>
      <div class="row m-0">
        <div class="col p-0">
          <img src={props.imageSource} class="w-100 h-100 h-sm-100" />
        </div>
        <div class="col p-0 py-4">
          <div class="card-block px-3">
            <h4 class="card-title">{props.name}</h4>
            <p class="card-text">{`${props.name}, a force sensitive human male, was a legendary Jedi Master who fought in the Galatic Civil War during the reign of tje Galatic Empire`} <span className="character-readmore-tag">...ReadMore</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard;