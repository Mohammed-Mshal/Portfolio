import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import "./social.css";
function Social(props) {
  return (
    <div
      className={`social d-flex flex-${props.dir} justify-content-around align-items-start`}
    >
      <a
        href="https://www.linkedin.com/in/mohammed-mshal-7405b3234/"
        className={`${props.textTheme} mx-${props.m} active`}
      >
        <FiLinkedin />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100009129184415"
        className={` ${props.textTheme} mx-${props.m} active`}
      >
        <FiFacebook />
      </a>
      <a
        href="https://github.com/Mohammed-Mshal"
        className={` ${props.textTheme} mx-${props.m} active`}
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;
