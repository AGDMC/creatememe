import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Hero.scss";
import sample from "../../assets/meme sample.png";
function Hero() {
  return (
    <>
      <div className="hero">
        <Link to="/" className="HomePage">
          <img className="logo-1" src={logo} alt="logo" />
        </Link>
        <div className="hero__title">
          Make relevant memes to express your mood{" "}
          <span role="img" aria-label="smiley emoji">
            &#x1F60A;
          </span>
        </div>
        <br />
        <br />
        <div className="hero__container--sample">
          <img className="hero__sample" src={sample} alt="sample" />
        </div>
      </div>
    </>
  );
}

export default Hero;
