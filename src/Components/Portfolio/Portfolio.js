import React, { useEffect, useState } from "react";
import HeaderComponent from "../HeaderComponent";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Project from "./Project";

SwiperCore.use([Navigation, Pagination]);
function Portfolio(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Mohammed-Mshal/repos`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }, []);

  return (
    <div
      id="portfolio"
      className={`portfolio ${props.theme.background} ${props.theme.text} py-5`}
    >
      <HeaderComponent title={`Portfolio`} secondTitle={`Most Recent Work`} />
      <div
        className={`container my-5 d-flex align-items-center justify-content-center`}
      >
        <Swiper
          navigation
          pagination
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => swiper.slideNext()}
        >
          {projects.map((project) => {
            return project.name !== `Portfolio` ? (
              <SwiperSlide key={project.id}>
                <Project
                  projectName={project.name}
                  img={`https://raw.githubusercontent.com/Mohammed-Mshal/${project.name}/master/Image_Slide.png`}
                  description={`My WebSite`}
                  link={`https://mohammed-mshal.github.io/${project.name}/`}
                />
              </SwiperSlide>
            ) : undefined;
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
