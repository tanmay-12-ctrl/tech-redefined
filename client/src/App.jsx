import React, { useState } from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";

import './index.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <Signup />
      <Login handleLoginClick={handleLoginClick} />
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome ZASHIONITES</h1>
            <p>Enter your personal details to use all site features</p>
            <button id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>ZASHION</h1>
            <p>Register with your personal details to use all site features</p>
            <button id="register" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
