import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './AuthForm.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    // 2. Add this console.log for testing
    console.log('Login button clicked!'); 
    e.preventDefault();
    setError('');

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(
        'http://localhost:5001/api/users/login',
        { email, password },
        config
      );
      login(data);
    } catch (err) {
      console.error("Login failed:", err); // Add error logging
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Login to Sevra</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* 3. Use Link instead of <a> */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;