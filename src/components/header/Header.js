import React from 'react';
import logo from '../../assests/logo.png'
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
          <div className="local font-weight-bold shadow" style={{ color: "white", fontWeight: "400", fontSize: "1.3em" }}>Find your favour Characters, Films, Species, Starships, and Planets</div>
          <input type="text" placeholder="Enter a search term" />
        </div>
      </div>
    </>
  )
}

export default Header