import React from 'react';
import './Header.scss';

import Logo from '../../assets/imgs/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={Logo} alt="ChinesePod"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
