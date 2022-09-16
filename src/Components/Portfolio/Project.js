import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "../Button";

function Project(props) {
  return (
    <div className="project row flex-wrap justify-content-center py-5">
      <img className="col-8 col-lg-4 mb-4" src={props.img} alt={props.projectName} />
      <div className="description col-8 col-lg-4 d-flex flex-column align-items-start justify-content-center">
        <h3>{props.projectName}</h3>
        <p>{props.description}</p>
        <Button link={props.link} textContent={`Demo`} icon={<FiArrowRight />} />
      </div>
    </div>
  );
}

export default Project;
