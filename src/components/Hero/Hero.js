import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="hero">
        <Link to="/" className="HomePage">
          <img className="logo-1" src={logo} alt="logo" />
        </Link>
        <div className="hero__title">
          Make relevant memes to express your mood with Tejal & Amanda{" "}
          <span role="img" aria-label="smiley emoji">
            &#x1F60A;
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
