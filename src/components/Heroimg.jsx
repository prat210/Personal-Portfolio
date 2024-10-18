import "./HeroImgstyle.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom"
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div> 
            <div className="content">
              <p>Hi, I Am a Web Developer</p>
              <h1> & A  Coding Enthusiast</h1>
              <div>
                <Link to="/project" className="btn"><span></span>Projects</Link>
                <Link to="/contact" className="btn btn-light"><span></span>Contact</Link>
              </div>
              </div>
      
    </div>
  )
}

export default Heroimg
