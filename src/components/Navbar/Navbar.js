import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="topnav">
          <div className="check">
            <div className="launch">
              <img className="iconagain" src="images/iconagain_ayuodq.svg" alt="" />
              <p>Great news! We're launching soon.</p>
            </div>
          </div>
        </div>
        <div className="logonav">
          <div className="logo">
            <img src="images/logo_2_wdskry.png" alt="" />
            <div className="prodiv">
              <p className="product">Product</p>
              <i className="fa-solid fa-angle-down"></i>
              <div className="renitrust">
                <a className="side" href="hhtps://www.google.com">ReniTrust</a>
              </div>
            </div>
            <i className="fa-solid fa-bars bar fa-2x"></i>
          </div>
        </div>
      </div>
  )
}

export default Navbar