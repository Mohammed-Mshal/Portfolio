import React, { useState } from "react";
import "./skill.css";
import { AiOutlineDown } from "react-icons/ai";

function Skill(props) {
  const skill = props.listOfSkills.map((ele, index) => {
    return (
      <li key={index} className="my-4">
        <div className="d-flex justify-content-between">
          <span>{ele.title}</span>
          <span>{ele.level}%</span>
        </div>
        <span className="range">
          <span className="complete" style={{ width: ele.level + "%" }}></span>
        </span>
      </li>
    );
  });

  const [show, setShow] = useState(false);

  return (
    <div className="skill ">
      <div
        className="d-flex align-items-center flex-wrap py-2 px-3 rounded-3"
        onClick={() => {
          show === false ? setShow(true) : setShow(false);
        }}
      >
        {props.iconSkill}
        <div className="d-flex flex-column ms-3">
          <h5 className="mb-1">{props.titleSkill}</h5>
          <span
            className={`${
              props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
            }`}
          >
            More than {props.yearOfSkill} years
          </span>
        </div>
        <AiOutlineDown
          className={`flex-1 fs-4 ms-auto ${props.textTheme} active icon_Arrow ${show&&'show'}`}
        />
      </div>
      <ul className={`list-unstyled w-100 ${show&&'show'}`}>{skill}</ul>
    </div>
  );
}

export default Skill;
