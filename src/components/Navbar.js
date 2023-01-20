import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const {click, setClick} = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
        setColor(true);
    }else{
        setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);








  return (
    <div className={color ? "header header-bg" : "header"}>
        <link to="/">
            <h1>Portfolio</h1>
        </link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="/project">Project</link>
            </li>
            <li>
                <link to="/about">About</link>
            </li>
            <li>
                <link to="/contact">Contact</link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />
            )}
        </div>
    </div>
  )
}

export default Navbar