import "./AboutContent.css";

import React from 'react';
import {Link} from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.png";

const AboutContent = () => {
  const listItemStyle = {
    color: '#000', // Set the text color to white
    display: 'inline-block',
    margin: '0 10px', // Adjust margin for spacing
    position: 'relative',
    opacity: 0,
    transform: 'translateY(-20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };
  return (
    <div>
      <div className="about">
        <div className="left">
          <h1>My Skill Set:</h1>
        
          <ul>
          <li className="visible" style={{color: 'white', listStyle: 'disc', marginBottom: '8px'}}>HTML</li>
          <li className="visible" style={{color: 'white',listStyle: 'disc', marginBottom: '8px'}}>CSS</li>
          <li className="visible" style={{color: 'white',listStyle: 'disc', marginBottom: '8px'}}>React.JS</li>
          <li className="visible" style={{color: 'white',listStyle: 'disc', marginBottom: '8px'}}>JavaScript</li>
          <li className="visible" style={{color:'white',listStyle: 'disc', marginBottom: '8px'}}>Express.Js</li>
          <li className="visible" style={{color:'white',listStyle: 'disc', marginBottom: '8px'}}>Java</li>
          <li className="visible" style={{color:'white',listStyle: 'disc', marginBottom: '8px'}}>Python</li>
          <li className="visible" style={{color:'white',listStyle: 'disc', marginBottom: '8px'}}>Problem Solving</li>
          <li className="visible" style={{color:'white',listStyle: 'disc', marginBottom: '8px'}}>Data Structures & Algorithm</li>
        </ul>
          
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>

      <div className="education">
        <div className="education-item">
          <h3>La Martiniere College</h3>
          <p>2005-2019</p>
        </div>
        <div className="education-item">
          <h3>Ramaiah Institute of Technology</h3>
          <p>2020-2024</p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
