import React from 'react';
import './css/Input.css'

function Input() {
  return (
    <div className="search">
      <span className="fa fa-search"></span>
      <input placeholder="Search term" />
    </div>
  )
}

export default Input;