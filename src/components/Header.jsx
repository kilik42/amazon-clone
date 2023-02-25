import React from 'react';
import './Header.css';
const  Header=() => {
  return (
<div className="header">
      <div className="header__logo">
        <img src="amazon-logo.png" alt="Amazon Logo" />
      </div>
      <div className="header__nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;