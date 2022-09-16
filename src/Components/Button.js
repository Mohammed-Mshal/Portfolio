import React from "react";

function Button(props) {
  return (
    <a
      href={props.link}
      className="btn border-0 text-decoration-none px-md-4 px-3 py-3 mt-md-4 mt-2 rounded-2 d-flex align-items-center"
      style={{ backgroundColor: `#685bcd`, color: `white` }}
    >
      {props.textContent}
      {props.icon}
    </a>
  );
}
export default Button;
