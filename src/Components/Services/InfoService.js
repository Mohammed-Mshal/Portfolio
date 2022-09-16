import React from "react";
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";

function InfoService(props) {
  const list_service = props.info.map((e, i) => (
    <li key={i} className={`my-4 d-flex align-items-center `}>
      <FaCheckCircle className="me-1 fs-4" style={{ color: `#685bcd` }} />
      {e}
    </li>
  ));
  return (
    <div
      className={`info_service ${
        props.show && `show`
      } d-flex justify-content-center align-items-center translate-middle`}
    >
      <div className="contain py-4 px-3 rounded-4">
        <div
          className={`header_info_service d-flex justify-content-between align-items-center text_dark active`}
        >
          <span className="fs-5">{props.title}</span>
          <FaWindowClose
            className="fs-4 but"
            onClick={() => {
              props.setShow(false);
            }}
          />
        </div>
        <ul className="list-unstyled">{list_service}</ul>
      </div>
    </div>
  );
}

export default InfoService;
