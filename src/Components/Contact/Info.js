import React from "react";

function Info(props) {
  return (
    <div className="d-flex align-items-center mx-4 mb-5 mt-1">
        {props.icon}
      <div>
        <h5 className="mb-1">{props.title}</h5>
        <span className="text-muted">{props.info}</span>
      </div>
    </div>
  );
}

export default Info;
