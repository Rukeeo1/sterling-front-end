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
            <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
            <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span className="character-readmore-tag">...ReadMore</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard;