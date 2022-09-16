import React from "react";
import HeaderComponent from "../HeaderComponent";
import BodySkills from "./BodySkills";
function Skills(props) {
  return (
    <div
    id="skills"
      className={`skills ${props.theme.background} ${props.theme.text} py-5`}
    >
      <div className="container">
        <HeaderComponent title="Skills" secondTitle="My technical level" />
        <BodySkills textTheme={props.theme.text} skill={props.skill}/>
      </div>
    </div>
  );
}

export default Skills;
