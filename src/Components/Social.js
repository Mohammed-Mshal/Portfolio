import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import "./social.css";
function Social(props) {
  return (
    <div
      className={`social d-flex flex-${props.dir} justify-content-around align-items-start`}
    >
      <a href="#linkedIn Url" className={`${props.textTheme} mx-${props.m} active`}>
        <FiLinkedin />
      </a>
      <a href="#facebook Url" className={` ${props.textTheme} mx-${props.m} active`}>
        <FiFacebook />
      </a>
      <a href="#github Url" className={` ${props.textTheme} mx-${props.m} active`}>
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;
