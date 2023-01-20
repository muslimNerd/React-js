import "./HeroImgStyles.css";

import React from 'react';

import PicImg from "../assets/pic.jpeg";

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={PicImg} alt="PicImg" />
      </div>
      <div className="content">
        <p>HI, I'M FANTA SY-SAVANE.</p>
        <h1>Fullstack Web Developer.</h1>
        <div>
          <Link to="/project"
          className="btn">Projects</Link>
           <Link to="/contact"
          className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg