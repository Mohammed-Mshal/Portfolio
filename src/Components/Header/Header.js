import React from "react";
import Introduction from "./Introduction";
import Social from "../Social";
import "./header.css";
function Header(props) {
  return (
    <div className={`header ${props.theme.background} `} id="home">
      <div className="container d-flex justify-content-between justify-content-md-start">
        <Social textTheme={props.theme.text} dir={`column`} m={0} />
        <Introduction textTheme={props.theme.text} />
        <img
          src={require(`../../myPicture.jpg`)}
          alt={`My_Picture`}
          className={`rounded-pill d-none d-lg-block `}
        />
      </div>
    </div>
  );
}

export default Header;
