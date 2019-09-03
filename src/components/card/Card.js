import React from 'react';
import './css/Card.css'

function Card(props){

  return (
    
    <div className={props.wrappingDiv} >
        <img className="card-img-top" src={props.imageSource} alt="Card image" style={{ width: "100%" }} />
        <div className="card-body pl-3 pb-2 border border-right-0">
          <h4 className="card-title mb-1" style={{fontSize:"20px"}}>{props.objectName}</h4>
          <p className="card-text mb-lg-0 mt-3px">{props.description}
          </p>
          <a href="#" className="btn btn-primary mt-lg-0 pl-4 pr-4" style={{marginLeft:"100px"}}>Read More
          <i className="fas fa-arrow-right ml-2" ></i>
          </a>
        </div>
      </div> 
   
  )
  }

export default Card