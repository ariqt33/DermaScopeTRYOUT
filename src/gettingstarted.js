import React from 'react';
import { Link } from 'react-router-dom';
import './gettingstarted.css'; // Use your updated CSS

function GettingStarted() {
  return (
    <div className="App_getting_start">
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
          <li><Link to="/register">Register</Link></li>  {/* Changed from <a href="#"> */}
          <li><Link to="/login">Log In</Link></li>        {/* Fixed line */}
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
          <li><Link to="/faq">FAQ</Link></li>
        </ul>

       <div className="right-nav">
  <button className="btn btn-sm try-btn">Try DermaCare</button>
</div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="subtittle">
              DermaCare is an AI-powered mobile application designed to assist in the early recognition of common skin diseases through image analysis.
              By leveraging advanced deep learning algorithms, DermaCare provides users with preliminary assessments based on clinically relevant features.
            </h2>
            <h3 className="tittle">GET STARTED ON YOUR SKIN WELLNESS JOURNEY!</h3>
            <a href="#getting-started" className="btn-yellow">Getting Started</a>
          </div>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoy9s8a-TUbDvdQo2V19qEcuWrdg7R5By5K9NO8pq8Fhjs8QI5"
            alt="AI Face Analysis Illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* Steps Section */}
      <section id="getting-started" className="about-section">
        <h2 className="section-title">Skin Self-Exam with AI in 3 Steps</h2>
        <div className="steps">
          <div className="step">
            <img
              src="https://media.istockphoto.com/id/928028506/vector/taking-selfie-on-smartphone-concept-creative-icon-selfie-label-hand-holding-smartphone-linear.jpg?s=170x170&k=20&c=21g_yu7ayotXLdYcdFy7DM3pciYLSinm89mGeBYLpDE="
              alt="Step 1: Take a photo"
            />
            <p>Find a bright room and take a clear photo of the skin problem.</p>
          </div>
          <div className="step">
            <img
              src="https://st3.depositphotos.com/25673058/34688/v/450/depositphotos_346885178-stock-illustration-artificial-intelligence-powered-smart-mobile.jpg"
              alt="Step 2: AI Analysis"
            />
            <p>Our AI applies advanced image processing technology to analyze your photo.</p>
          </div>
          <div className="step">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/012/816/818/small/cell-phone-icon-with-successful-completed-approval-or-accepted-ok-information-mobile-sign-logo-for-web-app-vector.jpg"
              alt="Step 3: Results"
            />
            <p>Receive detailed analysis and recommendations within seconds.</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why Us?</h2>
        <p>DermaScope helps you track your skin health, detect early signs, and analyze your needs over time.</p>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Let's Stay In Touch!</h2>
        <p>Connect to ambitious updates from the world of digital health</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Get Updates</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-newsletter">
          <h3>Stay Connected with DermaScope</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
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
            <a href="#" className="footer-btn">Free Consultation</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DermaScope. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default GettingStarted;
