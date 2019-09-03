import React from 'react';
import Card from '../card/Card'
import Luke from '../../assests/character-1.jpg'
import './css/Characters.css'

function Characters() {
  //if homepage render four...and hide pagination

  return (
    <section classNam="d-flex-inline">
      {/* <Card wrappingDiv="card people" imageSource={Luke}
      objectName="Luke Skywalker"
      otherName= "Son of Anakin"
      description="Luke Skywalker, a Force sensitive human male, was a  legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire..."
      />
      <Card wrappingDiv="card people" imageSource={Luke}
      objectName="Luke Skywalker"
      otherName= "Son of Anakin"
      description="Luke Skywalker, a Force sensitive human male, was a  legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire..."
      />
      <Card wrappingDiv="card people" imageSource={Luke}
      objectName="Luke Skywalker"
      otherName= "Son of Anakin"
      description="Luke Skywalker, a Force sensitive human male, was a  legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire..."
      />
      <Card wrappingDiv="card people" imageSource={Luke}
      objectName="Luke Skywalker"
      otherName= "Son of Anakin"
      description="Luke Skywalker, a Force sensitive human male, was a  legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire..."
      />
      <Card wrappingDiv="card people" imageSource={Luke}
      objectName="Luke Skywalker"
      otherName= "Son of Anakin"
      description="Luke Skywalker, a Force sensitive human male, was a  legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire..."
      /> */}


      <div class="card" style={{width: "36rem"}}>
        <div class="row m-0">
          <div class="col p-0">
            <img src={Luke} class="w-100 h-100 h-sm-100" />>
          </div>
          <div class="col p-0 py-4">
            <div class="card-block px-3">
              <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
              <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>


      <div class="card" style={{width: "36rem"}}>
        <div class="row m-0">
          <div class="col p-0">
            <img src={Luke} class="w-100 h-100 h-sm-100" />>
          </div>
          <div class="col p-0 py-4">
            <div class="card-block px-3">
              <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
              <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>


      <div class="card" style={{width: "36rem"}}>
        <div class="row m-0">
          <div class="col p-0">
            <img src={Luke} class="w-100 h-100 h-sm-100" />>
          </div>
          <div class="col p-0 py-4">
            <div class="card-block px-3">
              <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
              <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </div>






    </section>

  )
}

export default Characters;