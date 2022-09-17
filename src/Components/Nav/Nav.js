import React, { useEffect, useState } from "react";
import "./nav.css";
import { FiSun } from "react-icons/fi";
import NavBottom from "./NavBottom";

function Nav(props) {
  const [activePage, setActivePage] = useState(`home`);
  useEffect(
    () =>
      window.addEventListener(`scroll`, (e) => {
        if (e.currentTarget.scrollY < 200) {
          setActivePage(`home`);
        } else if (
          e.currentTarget.scrollY >= 200 &&
          e.currentTarget.scrollY < 950
        ) {
          setActivePage(`about`);
        } else if (
          e.currentTarget.scrollY >= 951 &&
          e.currentTarget.scrollY < 1300
        ) {
          setActivePage(`skills`);
        } else if (
          e.currentTarget.scrollY >= 1800 &&
          e.currentTarget.scrollY < 2400
        ) {
          setActivePage(`services`);
        } else if (
          e.currentTarget.scrollY >= 2401 &&
          e.currentTarget.scrollY < 2899
        ) {
          setActivePage(`portfolio`);
        } else if (e.currentTarget.scrollY >= 3900) {
          setActivePage(`contact`);
        }
      }),
    []
  );
  return (
    <div className={`nav ${props.theme.background}`}>
      <div className="container d-flex justify-content-between align-items-center ">
        <h1 className={`logo ${props.theme.text}`}>Mohammed</h1>
        <ul className="d-lg-flex d-none justify-content-end align-items-center flex-fill list-unstyled m-0">
          <li>
            <a
              href="#home"
              className={`${props.theme.text} ${
                activePage === `home` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`home`);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${props.theme.text}  ${
                activePage === `about` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`about`);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${props.theme.text} ${
                activePage === `skills` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`skills`);
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${props.theme.text}  ${
                activePage === `services` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`services`);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`${props.theme.text} ${
                activePage === `portfolio` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`portfolio`);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${props.theme.text}  ${
                activePage === `contact` ? `active` : undefined
              }`}
              onClick={() => {
                setActivePage(`contact`);
              }}
            >
              Contact Me
            </a>
          </li>
          <li></li>
        </ul>
        <button
          className={`${props.theme.text}`}
          onClick={() => {
            if (props.theme.background === `bg_dark`) {
              props.setTheme({
                background: `bg_light`,
                text: `text_light`,
              });
            } else {
              props.setTheme({
                background: `bg_dark`,
                text: `text_dark`,
              });
            }
          }}
        >
          <FiSun />
        </button>
        <NavBottom
          theme={props.theme}
          activePage={activePage}
          setActivePage={(activePage) => setActivePage(activePage)}
        />
      </div>
    </div>
  );
}

export default Nav;
