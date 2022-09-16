import React from "react";
import "./bodyInfo.css";
import { FiDownload } from "react-icons/fi";
import Button from "../Button";
function BodyInfo(props) {
  return (
    <div className="body_info container d-flex flex-column flex-lg-row align-items-center justify-content-center">
      <img
        srcSet={require(`../../myPicture.jpg`)}
        alt="my"
        className="me-lg-5 rounded-pill"
      />
      <div className="d-flex info flex-column text-center text-lg-start align-items-lg-start align-items-center justify-content-between ms-lg-5">
        <p
          className={`
        ${props.textTheme === `text_dark` ? `text-white-50` : `text-muted`} 
          mt-3
        `}
        >
          Web Developer, with extensive knowledge and years of experience,
          working in web technologies, delivering quality work.
        </p>
        <div className="d-flex flex-wrap flex-lg-nowrap justify-content-around text-center my-2">
          <div className="d-flex flex-column pe-lg-4 px-2 mt-2">
            <h4>8+</h4>
            <span
              className={`${
                props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
              }`}
            >
              years experience
            </span>
          </div>
          <div className="d-flex flex-column px-lg-4 px-2 mt-2">
            <h4>20+</h4>
            <span
              className={`${
                props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
              }`}
            >
              Completed Project
            </span>
          </div>
          <div className="d-flex flex-column px-lg-4 px-2 mt-2">
            <h4>5+</h4>
            <span
              className={`${
                props.textTheme === `text_dark` ? `text-white-50` : `text-muted`
              }`}
            >
              Companies Worked
            </span>
          </div>
        </div>
        <Button
          link={`#downloadCV`}
          textContent={`Download CV`}
          icon={<FiDownload className="ms-1 fs-5" />}
        />
      </div>
    </div>
  );
}

export default BodyInfo;
