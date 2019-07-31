import React from 'react';
import './Footer.scss';

import InstaIcon from '../../assets/imgs/instagram.png'
import AppStoreIcon from '../../assets/imgs/icon-app-store.png'
import GooglePlayIcon from '../../assets/imgs/icon-google-play.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__blog">
          <p>© 2019 ChinesePod LLC</p>
          <p>Follow us</p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <img src={InstaIcon} alt="Instagram"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstaIcon} alt="Instagram"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstaIcon} alt="Instagram"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstaIcon} alt="Instagram"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__blog">
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
        <div className="footer__blog">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer__blog">
          <p>Download ChinesePod App</p>
          <a href="#" className="footer__app-link">
            <img src={AppStoreIcon} alt="AppStore"/>
          </a>
          <a href="#" className="footer__app-link">
            <img src={GooglePlayIcon} alt="Google Play"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
