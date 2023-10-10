import React, { Component } from 'react';
import './Nav.css';
import download from '../Component/images/download.png'

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className="nav-blocks">
            <img className='logo' src={download} alt="" />
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    )
  }
}
