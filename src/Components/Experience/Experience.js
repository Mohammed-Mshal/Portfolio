import React, { useState } from "react";
import HeaderComponent from "../HeaderComponent";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import ViewMenu from "./ViewMenu";
import "./experience.css";
function Experience(props) {
  const [menuShow, setMenuShow] = useState(`Eduction`);
  return (
    <div
      id="experience"
      className={`experience ${props.theme.background} ${props.theme.text} py-5`}
    >
      <div className="container">
        <HeaderComponent
          textTheme={props.theme.text}
          title={`Qualification`}
          secondTitle={`My Personal Journey`}
        />
        <div className="d-flex justify-content-center fs-4 pt-5">
          <span
            className={`d-flex align-items-center mx-4 ${
              menuShow === `Eduction` ? `text_dark active` : undefined
            }`}
            onClick={() => setMenuShow(`Eduction`)}
          >
            <FaGraduationCap className="me-2" />
            Eduction
          </span>
          <span
            className={`d-flex align-items-center mx-4 ${
              menuShow === `Work` ? `text_dark active` : undefined
            }`}
            onClick={() => setMenuShow(`Work`)}
          >
            <FaBriefcase className="me-2" />
            Work
          </span>
        </div>

        <ViewMenu
          menuShow={menuShow}
          Eduction={props.eductions}
          Work={props.works}
        />
      </div>
    </div>
  );
}

export default Experience;
