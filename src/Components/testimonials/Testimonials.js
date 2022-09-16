import React, { useEffect, useState } from "react";
import HeaderComponent from "../HeaderComponent";
import Testimonial from "./Testimonial";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

function Testimonials(props) {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth <= 1024 ? 1 : window.innerWidth <= 1440 ? 2 : 3
  );
  useEffect(() => {
    function resize() {
      window.addEventListener(`resize`, (e) => {
        if (e.target.innerWidth <= 1024) {
          setSlidesPerView(1);
        } else if (e.target.innerWidth <= 1440) {
          setSlidesPerView(2);
        } else if (e.target.innerWidth > 1440) {
          setSlidesPerView(3);
        }
      });
    }
    resize();
    return window.removeEventListener(`resize`, resize);
  }, []);

  return (
    <div
      id="testimonials"
      className={`testimonials ${props.theme.background} ${props.theme.text} py-5`}
    >
      <HeaderComponent
        title={`Testimonials`}
        secondTitle={`My Client Saying`}
        textTheme={props.text}
      />
      <div
        className={`container my-5 d-flex align-items-center justify-content-center`}
      >
        <Swiper
          id="swipe"
          className="py-5"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => swiper.slideNext()}
        >
          {props.TM.length > 0
            ? props.TM.map((e, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Testimonial
                      name={e.name}
                      relation={e.relation}
                      rate={e.rate}
                      img={e.img}
                    />
                  </SwiperSlide>
                );
              })
            : `No Have Comment From Users Yet`}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
