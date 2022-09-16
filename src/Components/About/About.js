import React from "react";
import HeaderComponent from "../HeaderComponent";
import "./about.css";
import BodyInfo from "./BodyInfo";

function About(props) {
  return (
    <div className={`about ${props.theme.background} ${props.theme.text} py-5`}
    id='about'>
      <HeaderComponent title="About Me" secondTitle="My Introduction" />
      <BodyInfo textTheme={props.theme.text} />
    </div>
  );
}

export default About;
