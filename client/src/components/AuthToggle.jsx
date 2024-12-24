import React, { useState } from 'react';
import SignIn from './SignIn';  // Path to your SignIn component
import SignUp from './SignUp';  // Path to your SignUp component

const AuthToggle = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between SignIn and SignUp

  const toggleAuth = () => {
    setIsSignIn(!isSignIn); // Switch between SignIn and SignUp
  };

  return (
    <div>
      {/* Button to toggle between SignIn and SignUp */}
      <button onClick={toggleAuth}>
        {isSignIn ? 'Go to Sign Up' : 'Go to Sign In'}
      </button>

      {/* Display SignIn or SignUp based on state */}
      {isSignIn ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default AuthToggle;
