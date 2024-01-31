import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Ankish Kumar is a visionary developer! Sanchit Khurana appreciates his exceptional Full Stack skills. Ankish crafted a seamless, efficient solution for our project, demonstrating deep expertise in Java, Spring Boot, and React. His dedication, precision, and collaborative spirit make him the go-to developer for transformative digital experiences.",
    },
    {
      img: profilePic2,
      review:
        "Ankish Kumar's prowess as a Full Stack Developer amazed us! Ajay values his top-notch skills. Ankish seamlessly integrated Java, Spring Boot, and React, delivering a tailored solution with precision. His commitment and collaborative approach make him an invaluable partner for creating impactful digital experiences.",
    },
    {
      img: profilePic3,
      review:
        "Ankish Kumar stands out as a visionary in Full Stack development! Sachin praises his mastery. Ankish seamlessly integrated Java, Spring Boot, and React, fashioning a solution that exudes innovation. His steadfast dedication and collaborative approach mark him as an essential collaborator in crafting extraordinary digital realms.",
    },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
