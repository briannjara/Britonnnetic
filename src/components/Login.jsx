import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

function Login({ toggleForm, forgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email/Username*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <a href="#" className="forgot-password" onClick={(e) => {
            e.preventDefault();
            forgotPassword();
          }}>Forgot your password?</a>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="divider">
        <span>OR</span>
      </div>
      <div className="social-login">
        <div className="social-icon-container">
          <FaGoogle />
        </div>
        <div className="social-icon-container">
          <FaMicrosoft />
        </div>
        <div className="social-icon-container">
          <FaGithub />
        </div>
      </div>
      <p className="signup-text">
        Don't have an account? <a href="#" className="signup-link" onClick={toggleForm}>Sign Up</a>
      </p>
    </div>
  );
}

export default Login; 