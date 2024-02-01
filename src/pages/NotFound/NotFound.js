import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import uhoh from "../../assets/chandler.gif";

function NotFound() {
  return (
    <>
      <div className="nf__title">404 NotFound!</div>
      <div className="nf__title--details">
        <img className="uhoh" src={uhoh} alt="logo" />
        <br />
        Uh-oh! The page you are looking for does not exist. Please go back to
        the{" "}
        <Link to="/" className="HomePage">
          homepage.
        </Link>
      </div>
    </>
  );
}

export default NotFound;
