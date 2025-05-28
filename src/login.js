import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy check - replace with API or real logic later
    if (email === 'ali@gmail.com' && password === '123456') {
      setLoginMessage('Login Successful!');
    } else {
      setLoginMessage('Invalid email or password.');
    }
  };

  return (
    <div className="App_getting_start login-bg">
      {/* Navbar */}
      <nav className="navbar background">
        <div className="logo">
          <img src="https://cbx-prod.b-cdn.net/COLOURBOX63612188.jpg?width=800&height=800&quality=70" alt="Logo" height="50" />
          <span className="logo-text">DermaScope Analyze & Consulting</span>
        </div>
        <ul className="nav-list">
          <li><Link to="/">Main</Link></li>
          <li className="has-dropdown">
            <Link to="/getting-started">Getting Started <span className="arrow">▼</span></Link>
            <ul className="dropdown">
              <li><Link to="/getting-started">Explore DermaScope</Link></li>
            </ul>
          </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li className="has-dropdown">
            <a href="#">Skin Health <span className="arrow">▼</span></a>
             <ul className="dropdown">
             <li><Link to="/skinhealth#skintypes">Find Skin Types</Link></li>
            <li><Link to="/skinhealth#moles">Skin Spot And Moles</Link></li>
           <li><Link to="/skinhealth#cancerinfo">Skin Cancer Info</Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#">Stories <span className="arrow">▼</span></a>
            <ul className="dropdown">
              <li><a href="#">From Users</a></li>
              <li><Link to="/skincaretips">Skincare Tips</Link></li>
            </ul>
          </li>
          <li><Link to="/skincaretips">Skincare Tips</Link></li>
        </ul>
        <div className="right-nav">
  <button className="btn btn-sm try-btn">Try DermaCare</button>
</div>
      </nav>

      {/* Login Form */}
      <div className="login-wrapper">
        <div className="login-card">
          <span className="login-tag">LOGIN</span>
          <h2>Log in to track your skin's progress</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            {loginMessage && (
              <p className="login-message">{loginMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-newsletter">
          <h3>Stay Connected with DermaCare</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">Main</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>123 Derma Street</li>
              <li>(123) 456-7890</li>
              <li><a href="mailto:support@dermacare.com">support@dermacare.com</a></li>
            </ul>
            <a className="footer-btn" href="#">Free Consultation</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DermaCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
