import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleTheme = () => {
    document.body.className = isDarkMode ? 'bg-light' : 'bg-dark';
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
      <button  onClick={handleTheme} style={{color:'white',borderRadius:'50%',width:'50px',height:'50px',border:'1px solid white'}} className="bg-success">{isDarkMode ? 'Dark' : 'Light'}</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
