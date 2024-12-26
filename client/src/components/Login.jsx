import React from 'react';

const Login = ({ handleLoginClick }) => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <span> Use your email and password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button type="button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
