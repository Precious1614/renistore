import React from 'react'
import GooglePlay from '../../images/googleplay_rt341u.svg'
import AppStore from '../../images/appstore_krm7ha.svg'
const BodyLeft = () => {
  return (
    <div className="bodyleft">
    <h1>Buy safely from multiple stores with ease.</h1>
    <div className="subhead">
      <p>The best and safest online market place.</p>
    </div>
    <div className="get">
      <p>
        <i className="fa-solid fa-bullseye"></i> Get the best retail deals
        with seamless logistics solution.
      </p>
      <p>
        <i className="fa-solid fa-bullseye"></i>
        100% safety guaranteed by our escrow service.
      </p>
      <p>
        <i className="fa-solid fa-bullseye"></i> You can own multiple stores
        for free.
      </p>
    </div>
    <form className="form" action="">
      <div className="name">
        <input
          className="input"
          type="text"
          name="fullname"
          id=""
          placeholder="Full Name"
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="button">
        <button className="submitbutton">Get early access</button>
      </div>
    </form>
    <p className="coming">Coming soon</p>
    <div className="googleapple">
      <div className="google">
        <img src={GooglePlay} alt="" />
        <div className="note">
          <p>Get it on</p>
          <h5>Google Play</h5>
        </div>
      </div>
      <div className="apple">
        <img src={AppStore} alt="" />
        <div className="note">
          <p>Download on the</p>
          <h5>Apple Store</h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BodyLeft