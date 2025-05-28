import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // TODO: Send to backend (Node.js)
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar background">
        <div className="logo">
          <img
            src="https://cbx-prod.b-cdn.net/COLOURBOX63612188.jpg?width=800&height=800&quality=70"
            alt="Logo"
            height="50"
          />
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

      {/* Register Form */}
      <section className="register-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <button className="register-top-btn" disabled>REGISTER</button>
          <h2>Keep up-to-date with your skin health journey.</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I accept the Terms of Use and Privacy Policy
          </label>
          <button type="submit" className="register-submit">Register</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-newsletter">
    <h3>Latest News from</h3>
    <form className="newsletter-form">
      <input type="email" placeholder="Email Address" />
      <button type="submit">Subscribe</button>
    </form>
  </div>

  <div className="footer-links">
    <div>
      <h4>Company</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>

    <div>
      <h4>Resources</h4>
      <ul>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Podcasts</a></li>
        <li><a href="#">Stories</a></li>
      </ul>
    </div>

    <div>
      <h4>Contact</h4>
      <ul>
        <li>1237 Ocean Avenue, Charlotte, NC</li>
        <li>(888) 945-7266</li>
        <li><a href="mailto:mail.dermascope@gmail.com">mail.dermascope@gmail.com</a></li>
      </ul>
      <a className="footer-btn" href="#">Free Consultation</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 DermaScope. All rights reserved.</p>
  </div>
</footer>
    </>
  );
}

export default Register;
