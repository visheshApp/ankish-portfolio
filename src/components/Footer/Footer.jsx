import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const routeNavigate = (url) =>{
  window.open(url);
}



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ankishkumar1910@gmail.com   </span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} onClick={()=> routeNavigate("https://www.instagram.com/er_ankish_kumar/?igsh=MTdwd21hdmswNDgwaQ%3D%3D")} />
          <Facebook color="white" size={"3rem"}  onClick={()=> routeNavigate("https://www.facebook.com/ankishraj.singhsurayavanshi")}    />
          <Gitub color="white" size={"3rem"} onClick={()=> routeNavigate("https://github.com/ankish2016")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
