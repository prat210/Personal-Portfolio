import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
                    {/* react home icon */}
                    <div>
                     <p> Mathikere, Bengaluru</p>  
                     <p>India</p> 
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem", marginLeft: "0rem"}}/>\ +91-7905659389</h4>
                        
                    </div>
                    <div className="email">
        <h4>
          <a href="mailto:pratyushsinha24201@gmail.com">
            <FaMailBulk className="Faicons" size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            pratyushsinha24201@gmail.com
          </a>
        </h4>
      </div>
                </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Pratyush. I'm a coding enthusiast & a Web Developer</p>
                <div className="social">
      <a href="https://github.com/prat210" target="_blank" rel="noopener noreferrer" >
        <FaGithub className="Faicons" size={20} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>

      <a href="https://leetcode.com/Sinha_21/" target="_blank" rel="noopener noreferrer" >
        <SiLeetcode className="Faicons" size={20} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>

      <a href="https://www.linkedin.com/in/pratyush-sinha-61b31a200" target="_blank" rel="noopener noreferrer" >
        <FaLinkedin  className="Faicons" size={20} style={{ color: "#fff", marginRight: "1rem" }} />
      </a>
    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
