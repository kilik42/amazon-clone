import React from 'react';
import './Header.css';

function Header() {
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
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <button className="header__searchButton">Search</button>
      </div>
      <div className="header__options">
        <span className="header__optionLineOne">Hello, Guest</span>
        <span className="header__optionLineTwo">Sign In</span>
      </div>
    </div>
  );
}

export default Header;
