import React from 'react';
import {Link } from 'react-router-dom'


function ViewMore(props){

  return (
    <Link to={`/${props.page}`}>
    <h2 className="btn btn-primary d-flex justify-content-center mt-5" style={{width:"450px", margin:"auto", background:"white"}}>{props.tag? props.tag : `VIEW MORE`}</h2>
    </Link>
  )
}

export default ViewMore;