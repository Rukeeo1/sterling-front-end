import React from 'react';
import {Link} from 'react-router-dom'
import './css/Card.css'

function Card(props){
  // const starshipId = getId(props)
  let starshipId = '5'
  if(props.urlId) {
    starshipId = props.urlId;
  }

  return (   
    <div className={props.wrappingDiv} >
        <img className="card-img-top" src={props.imageSource} alt="Card" style={{ width: "100%" }} />
        <div className="card-body pl-3 pb-2 border border-right-0">
          <h4 className="card-title mb-1" style={{fontSize:"20px"}}>{props.objectName}</h4>
          <p className="card-text mb-lg-0 mt-3px">{props.description}
          </p>
          <a href="#" className="btn btn-primary mt-lg-0 pl-4 pr-4" style={{marginLeft:"147px"}}><Link to={`/starship/${starshipId}`}>Read More</Link>
          <i className="fas fa-arrow-right ml-2" ></i>
          </a>
        </div>
      </div>
  )
  }

function getId (props){
  const splitPropsUrl=  props.url.split('/')
 return  splitPropsUrl[5]
  
}

export default Card