import React from "react";
import { Link } from "react-router-dom"; // Added import for Link component
import "./Footer.scss";
import logo from "../../assets/logo.png";
import fb from "../../assets/icons/fb.png";
import ig from "../../assets/icons/ig.png";
import t from "../../assets/icons/t.png";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Meme Generator</h4>
      <div className="footer__wrapper">
        <Link to="/" className="HomePage">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="footer__socials">
          <h4 className="footer__socials--title"> Connect with us!</h4>
          <div className="footer__icons">
            <a href="*">
              <img className="fb" src={fb} alt="facebook" />
            </a>
            <a href="*">
              <img className="ig" src={ig} alt="instagram" />
            </a>
            <a href="*">
              <img className="t" src={t} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
