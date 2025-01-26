import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

function SignUp({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password*</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="submit" className="login-button">Sign Up</button>
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
        Already have an account? <a href="#" className="signup-link" onClick={toggleForm}>Login</a>
      </p>
    </div>
  );
}

export default SignUp; 