import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.jpeg";
import Ecommerce from "../../img/eccomerce.jpeg";
import HOC from "../../img/hoc.png";
import Bajaj from "../../img/bajaj.png";
import MusicApp from "../../img/musicapp.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt=""  className="projectImg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt=""  className="projectImg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" className="projectImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bajaj} alt="" className="projectImg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
