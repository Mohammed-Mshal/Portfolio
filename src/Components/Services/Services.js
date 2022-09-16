import React from "react";
import HeaderComponent from "../HeaderComponent";
import ServiceCard from "./ServiceCard";
import "./services.css";

function Services(props) {
  return (
    <div
      id="services"
      className={`services ${props.theme.background} ${props.theme.text} py-5`}
    >
      <HeaderComponent
        textTheme={props.theme.text}
        title={`Services`}
        secondTitle={`What I Offer`}
      />
      <div className="container d-flex justify-content-xl-center justify-content-md-between justify-content-center flex-wrap py-5 px-5">
        {props.services.length > 0
          ? props.services.map((e,i) => {
              return (
                <ServiceCard title={e.title} info={e.info} icon={e.icon} key={i}/>
              );
            })
          : `No Have Services`}
      </div>
    </div>
  );
}

export default Services;
