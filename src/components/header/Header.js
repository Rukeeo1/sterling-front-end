import React from 'react';
import logo from '../../assests/logo.png';
import Input from '../input/Input.js'
import Hr from '../underline/Underline'
import './css/Header.css'


function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="star-wars-logo ml-lg-5 mt-5" />
        <div className="header-title" style={{ color: "red" }}>
          <div className="logo-directory">
            <img src={logo} alt="logo" className="star-wars-logo" />
            <div className="directory">
              <p>Directory</p>
            </div>
          </div>
          <Hr background="white" height="2px" width="295px" marginTop="0px"/>
          <div className="local font-weight-bold shadow" style={{ color: "#919191", fontWeight: "400", fontSize: "1.3em" }}>Find your favour Characters, Films, Species, Starships, and Planets</div>
          {/* <input type="text" placeholder="Enter a search term" /> */}
          <Input />
        </div>
      </div>
    </>
  )
}

export default Header