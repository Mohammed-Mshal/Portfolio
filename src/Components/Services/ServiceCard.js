import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import InfoService from "./InfoService";

function ServiceCard(props) {
  const [show, setShow] = useState(false);
  const inf = (
    <InfoService
      title={props.title}
      show={show}
      setShow={setShow}
      info={props.info}
    />
  );
  return (
    <div
      className={`service_card d-flex flex-column justify-content-end align-items-start p-5 mx-xl-4 my-2 `}
    >
      {props.icon}
      <h4 className={`my-3 `}>{props.title}</h4>
      <button
        className="bg-transparent border-0 fs-6 p-0"
        onClick={() => setShow(true)}
      >
        View More <FaArrowRight />
      </button>
      {inf}
    </div>
  );
}

export default ServiceCard;
