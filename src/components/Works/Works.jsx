import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.jpg";
import Fiverr from "../../img/fiverr.png";
import Nexdew from "../../img/Nexdew.png"
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const routerNavigate=(url)=>{
    window.open(url)
  }

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          
          Collaborates with diverse brands and clients globally, delivering unparalleled Full Stack Development <br />
          solutions. From Java to React, his expertise ensures innovative, scalable, and transformative digital  <br />
          experiences, elevating businesses to new heights of success.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div onClick={()=>routerNavigate("https://dynamind.co/")} className="w-secCircle ">
            <img src={Upwork} alt="" className="dynamind" />
          </div>
          <div onClick={()=>routerNavigate("https://www.microsoft.com/en-in")}  className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div  onClick={()=>routerNavigate("https://nexdew.com/")} className="w-secCircle">
            <img src={Nexdew} alt="" />
          </div>{" "}
          <div onClick={()=>routerNavigate("https://dynamind.co/")}  className="w-secCircle" >
           <img src={Shopify} alt="" className="dynamind"  />
          </div>
          <div onClick={()=>routerNavigate("https://www.cloudwords.com/")}  className="w-secCircle">
            <img src={Facebook} alt=""  className="dynamind" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
