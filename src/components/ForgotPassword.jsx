import React, { useState } from 'react';
import './Login.css';

function ForgotPassword({ toggleForm }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Reset password for:', email);
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
        <button  type="submit" className="login-button">Submit</button>
      </form>
      <p className="signup-text">
        Remember your password? <a href="#" className="signup-link" onClick={toggleForm}>Back to Login</a>
      </p>
    </div>
  );
}

export default ForgotPassword; 