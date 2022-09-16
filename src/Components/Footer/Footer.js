import React from "react";
import Social from "../Social";
import "./footer.css";
function Footer(props) {
  return (
    <div className={`footer text-white ${props.theme.background} py-5`}>
      <div
        className={`container d-flex flex-column flex-md-row text-center text-md-start justify-content-around flex-wrap `}
      >
        <div className={`logo_name`}>
          <h2 className="mb-2">Mohammed</h2>
          <span className="fs-6">Front-End Developer</span>
        </div>
        <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap mt-3 mt-md-0">
          <li className=" mx-4 mt-3 mt-md-0">
            <a href="#services" className={`text-decoration-none fs-5 `}>
              Services
            </a>
          </li>
          <li className=" mx-4 mt-3 mt-md-0">
            <a href="#portfolio" className={`text-decoration-none fs-5 `}>
              Portfolio
            </a>
          </li>
          <li className=" mx-4 mt-3 mt-md-0">
            <a href="#contact" className={`text-decoration-none fs-5 `}>
              Contact Me
            </a>
          </li>
        </ul>
        <div>
          <Social dir={`row`} textTheme={`text-white`} m={3} />
        </div>
      </div>
      <div className="copyright text-center text-white-50 mb-5 mt-3 mb-lg-0">
        &copy; Mohammed Mshal, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
