import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import Button from "../Button";
import "./com-contact.css";

function ComContact(props) {
  return (
    <div
      className={`com-contact p-5 ${props.theme.background} ${props.theme.text}`}
    >
      <div className="container com-contact-content row justify-content-center align-items-center flex-column-reverse flex-lg-row mx-auto py-4">
        <div className="col-10 col-lg-6 d-flex flex-column align-items-lg-start align-items-center my-3 text-center text-lg-start px-0">
          <h3>You have a new project</h3>
          <p className="text-center text-lg-start">Contact me now and get a 30% discount on your new project</p>
          <Button
            link={`#contact`}
            textContent={`Contact Me`}
            textTheme={props.theme.text}
            icon={<AiOutlineSend className="ms-1 fs-5" />}
          />
        </div>
        <img src={require(`../../myPicture.jpg`)} className="col-8 col-lg-4" alt="" />
      </div>
    </div>
  );
}

export default ComContact;
