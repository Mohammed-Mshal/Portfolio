import React from "react";
import { FiStar } from "react-icons/fi";
function Testimonial(props) {
  const rate = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.rate) {
      rate.push(
        <FiStar
          key={i}
          style={{
            color: `rgb(104, 91, 205)`,
            fill: `rgb(104, 91, 205)`,
          }}
        />
      );
    } else {
      rate.push(
        <FiStar
          key={i}
          style={{
            color: `rgb(104, 91, 205)`,
          }}
        />
      );
    }
  }
  return (
    <div className="testimonial mx-auto">
      <div className="testimonial-header d-flex align-items-start justify-content-center flex-wrap flex-md-nowrap">
        <img
          src={props.img}
          alt={`picture_of_${props.name}`}
          className="rounded-pill me-3"
        />
        <div>
          <h5>{props.name}</h5>
          <span className="fs-6 text-muted">{props.relation}</span>
        </div>
        <span className="d-flex mt-1 ms-md-auto mx-auto">{rate}</span>
      </div>
      <p className="comment mt-3 px-5 px-sm-4 px-md-0 text-center text-md-start">
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </p>
    </div>
  );
}

export default Testimonial;
