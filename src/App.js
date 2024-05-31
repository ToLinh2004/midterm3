import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
const handleThem= ()=>{
  setIsDarkMode(!isDarkMode);
}
  return (
    <div className="App"  style={{ 
      backgroundColor: isDarkMode ? 'black' : 'white',
    }}>
      <Router>
        <Navbar />
      <button onClick={handleThem} style={{borderRadius:'10px',height:'40px',width:'100px',marginRight:'80%'}}>{isDarkMode ? 'Light' : 'Dark'}</button>
        <Home />
      </Router>
    </div>
  );
};
export default App;
