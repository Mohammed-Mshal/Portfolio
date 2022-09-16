import React from "react";
import {} from "react-icons";
import { FaCalendarTimes } from "react-icons/fa";
function InfoEx(props) {
  return (
    <div className="info_ex d-flex flex-column">
      <h3>{props.title}</h3>
      <p className="mb-1">{props.address}</p>
      <p className="d-flex align-items-center mb-0">
        <FaCalendarTimes  className="me-2"/>
        {props.date}
      </p>
    </div>
  );
}

export default InfoEx;
