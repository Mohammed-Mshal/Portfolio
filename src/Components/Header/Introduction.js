import React from "react";
import "./introduction.css";
import { AiOutlineSend } from "react-icons/ai";
import Button from "../Button";
function Introduction(props) {
  return (
    <div className="introduction ms-3 ms-md-5 me-md-5 d-flex flex-column justify-content-between align-items-start ">
      <h1 className={`${props.textTheme}`}>Hi, I'm Mohammed</h1>
      <h4
        className={`py-md-2 py-1 ${
          props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
        }`}
      >
        Front-End Developer
      </h4>
      <p
        className={`my-2 ${
          props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
        }`}
      >
        High level experience in web development knowledge, producing
        quality work.
      </p>
      <Button
        link={`#ContactMe`}
        textContent={`Contact Me`}
        textTheme={props.textTheme}
        icon={<AiOutlineSend className="ms-1 fs-5" />}
      />
    </div>
  );
}

export default Introduction;
