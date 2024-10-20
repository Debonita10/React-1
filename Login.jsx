import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false); // reCAPTCHA check

  // Handle form submission for Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Logging in with', mobileNumber, password);
  };

  // Handle form submission for Register
  const handleRegister = (e) => {
    e.preventDefault();
    // Register logic here
    console.log('Registering with', mobileNumber, isRobot);
  };

  return (
    <div className="auth-container">
      
      <div className="auth-toggle">
  <button
    className={`toggle-btn login-btn ${isLogin ? 'active' : ''}`}
    onClick={() => setIsLogin(true)}
  >
    Login
  </button>
  <button
    className={`toggle-btn register-btn ${!isLogin ? 'active' : ''}`}
    onClick={() => setIsLogin(false)}
  >
    Register
  </button>
</div>

      
      {isLogin ? (
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="auth-form">
          <div className="input-container">
            <span className="country-code">+91</span>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="recaptcha-container">
            <input
              type="checkbox"
              checked={isRobot}
              onChange={() => setIsRobot(!isRobot)}
              required
            />
            <label>I'm not a robot</label>
          </div>
          <div className="action-buttons">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="otp-button">
              Send OTP
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;