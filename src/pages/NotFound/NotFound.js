import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="nf__title">404 NotFound!</div>
      <div className="nf__title--details">
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
