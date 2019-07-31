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
        <p className="header__num-of-test"><span>1</span>/10</p>
      </div>
    </header>
  )
}

export default Header;
