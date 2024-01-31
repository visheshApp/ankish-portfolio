import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane  >
        Transforming visions into reality! Offering cutting-edge Full Stack Development <br />
         services with Java, Spring Boot, React, and more for unparalleled digital experiences.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Tech."}
            detail={"React.js, Angular, Next.js, Backbone.js, View.js"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend Tech."}
            detail={"Java/Spring Boot, Node.js/Express, Rust, GoLang"}
            
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database Tech."}
            detail={`SQL(MySQL), MongoDB, PostgreSQL, Firebase, Cassandra, Oracle, MariaDB`}
          
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ left: "25rem", top: "12rem" }}
          whileInView={{ left: "31rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Deployment Tech."}
            detail={"Aws, Azure, Render, DigitalOcean, Vercel"}
          />

</motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
