import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import "./contact.css";
import HeaderComponent from "../HeaderComponent";
import Info from "./Info";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    );
    document.querySelectorAll(`#contact input`).forEach((e) => (e.value = ``));
    document.querySelector(`#contact textarea`).value = ``;
  };
  return (
    <div
      id="contact"
      className={`contact ${props.theme.background} ${props.theme.text} py-5`}
    >
      <HeaderComponent
        title={`Contact Me`}
        secondTitle={`Get In Touch`}
        textTheme={props.theme.text}
      />
      <div className="container">
        <div className="row justify-content-center align-items-center align-items-lg-start flex-column-reverse flex-lg-row">
          <div className="personal_info col-lg-5 col-12 d-flex flex-row flex-lg-column justify-content-sm-between justify-content-start flex-wrap">
            <Info
              icon={
                <FiPhone
                  className="fs-3 me-3"
                  style={{ color: `rgb(104, 91, 205)` }}
                />
              }
              title={`Call Me`}
              info={`+963 943 698 818`}
            />
            <Info
              icon={
                <FiMail
                  className="fs-3 me-3"
                  style={{ color: `rgb(104, 91, 205)` }}
                />
              }
              title={`Email`}
              info={`mohammedmshal02@gmail.com`}
            />
            <Info
              icon={
                <FiMapPin
                  className="fs-3 me-3"
                  style={{ color: `rgb(104, 91, 205)` }}
                />
              }
              title={`Location`}
              info={`Syria, Damascus`}
            />
          </div>
          <form
            onSubmit={sendEmail}
            className="message col-lg-6 col-10 d-flex align-content-between flex-wrap p-0 mb-3"
          >
            <div className="input position-relative p-0 my-2 d-flex me-xl-2 me-lg-0 me-md-2 mx-auto flex-fill rounded-4">
              <label className="position-absolute pt-2 ps-3 flex-fill">
                Name
              </label>
              <input
                name="from_name"
                type={`text`}
                className={`bg-transparent text-muted border-0 fs-5 pt-5 pb-2 ps-3  flex-fill `}
              />
            </div>
            <div className="input  position-relative p-0  my-2 d-flex ms-xl-2 ms-lg-0 ms-md-2 mx-auto flex-fill rounded-4 ">
              <label className="position-absolute pt-2 ps-3 ">Email</label>
              <input
                name="email_from"
                type={`email`}
                className={`bg-transparent text-muted border-0 fs-5 pt-5 pb-2 ps-3  flex-fill`}
              />
            </div>
            <div className="input  position-relative p-0 w-100 my-2 d-flex rounded-4 ">
              <label className="position-absolute pt-2 ps-3 ">Project</label>
              <input
                name="Project"
                type={`text`}
                className={`bg-transparent text-muted border-0 fs-5 pt-5 pb-2 ps-3 flex-fill`}
              />
            </div>
            <div className="textarea position-relative p-0 w-100 my-2 d-flex rounded-4 ">
              <label className="position-absolute pt-2 ps-3 ">Message</label>
              <textarea
                name="message"
                className={`bg-transparent text-muted border-0 fs-5 pt-5 pb-2 ps-3 flex-fill`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn border-0 text-white px-4 py-3 mt-2 mx-auto mx-lg-0`}
              style={{ backgroundColor: `rgb(104, 91, 205)` }}
            >
              Send Message <FaTelegramPlane className="fs-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
