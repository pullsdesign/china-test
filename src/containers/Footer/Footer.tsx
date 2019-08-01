import React from 'react';
import './Footer.scss';

import InstaIcon from '../../assets/imgs/insta-icon.png'
import TwitterIcon from '../../assets/imgs/twitter-icon.png'
import FBIcon from '../../assets/imgs/facebook-icon.png'
import YouTubeIcon from '../../assets/imgs/youtube-icon.png'
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
              <a
                href="https://www.instagram.com/chinesepod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstaIcon} alt="Instagram"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ChinesePod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FBIcon} alt="Facebook"/>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/chinesepod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="Twitter"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/ChinesePodTV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YouTubeIcon} alt="YouTube"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__blog">
          <a
            href="https://chinesepod.com/why-choose-us/"
            target="_blank"
            rel="noopener noreferrer"
          >About</a>
          <a
            href="https://support.chinesepod.com/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >Support</a>
        </div>
        <div className="footer__blog">
          <a
            href="https://chinesepod.com/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >Terms of Service</a>
          <a
            href="https://chinesepod.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >Privacy</a>
        </div>
        <div className="footer__blog">
          <p>Download ChinesePod App</p>
          <a
            href="https://itunes.apple.com/us/app/chinesepod-podcast/id1185380819?mt=8"
            target="_blank"
            className="footer__app-link"
            rel="noopener noreferrer"
          >
            <img src={AppStoreIcon} alt="AppStore"/>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=llc.chinesepod.android&hl=en"
            target="_blank"
            className="footer__app-link"
            rel="noopener noreferrer"
          >
            <img src={GooglePlayIcon} alt="Google Play"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
