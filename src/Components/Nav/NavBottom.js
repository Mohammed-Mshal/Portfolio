import React from "react";
import "./NavBottom.css";
function NavBottom(props) {
  return (
    <ul
      className={`d-lg-none d-flex nav__bottom ${props.theme.background} list-unstyled m-0`}
    >
      <li>
        <a
          href="#home"
          className={`${props.theme.text}  
            ${props.activePage === `home` ? `active` : undefined}
          `}
          onClick={() => {
            props.setActivePage(`home`);
          }}
        >
          <i className="fas fa-home"></i>
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`${props.theme.text}             ${
            props.activePage === `about` ? `active` : undefined
          }
            `}
          onClick={() => {
            props.setActivePage(`about`);
          }}
        >
          <i className="fas fa-id-card"></i>
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={`${props.theme.text} 
            ${props.activePage === `skills` ? `active` : undefined}
            `}
          onClick={() => {
            props.setActivePage(`skills`);
          }}
        >
          <i className="fas fa-flask"></i>
        </a>
      </li>
      <li>
        <a
          href="#services"
          className={`${props.theme.text} 
            ${props.activePage === `services` ? `active` : undefined}
            `}
          onClick={() => {
            props.setActivePage(`services`);
          }}
        >
          <i className="fas fa-briefcase"></i>
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className={`${props.theme.text}
            ${props.activePage === `portfolio` ? `active` : undefined}
            `}
          onClick={() => {
            props.setActivePage(`portfolio`);
          }}
        >
          <i className="fas fa-receipt"></i>
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`${props.theme.text}             ${
            props.activePage === `contact` ? `active` : undefined
          }
            `}
          onClick={() => {
            props.setActivePage(`contact`);
          }}
        >
          <i className="fas fa-address-book"></i>
        </a>
      </li>
    </ul>
  );
}

export default NavBottom;
