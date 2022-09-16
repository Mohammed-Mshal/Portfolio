import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAddressCard, FaFlask } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdReceipt } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
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
          <AiOutlineHome />
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
          <FaAddressCard />
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
          <FaFlask />
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
          <BiBriefcase />
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
          <MdReceipt />
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
          <ImAddressBook />
        </a>
      </li>
    </ul>
  );
}

export default NavBottom;
