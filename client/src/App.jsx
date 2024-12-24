import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AuthToggle from './components/AuthToggle'; // Import the AuthToggle component

function App() {
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  const toggleAuth = () => {
    setIsAuthVisible(!isAuthVisible); // Toggle between showing and hiding Auth forms
  };

  return (
    <div className="App">
      <Navbar toggleAuth={toggleAuth} /> {/* Pass toggleAuth to Navbar */}
      <h1>Welcome to the Authentication System</h1>
      {isAuthVisible && <AuthToggle />} {/* Show AuthToggle based on the state */}
    </div>
  );
}

export default App;
