import React from "react";

function HeaderComponent(props) {
  return (
    <div className="text-center mb-4">
      <h2 className="fs-1 fw-bold">{props.title}</h2>
      <h6
        className={`${
          props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
        } fw-lighter`}
      >
        {props.secondTitle}
      </h6>
    </div>
  );
}

export default HeaderComponent;
